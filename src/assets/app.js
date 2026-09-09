import {defaults,clone,validateState,PRESETS,MODIFIERS,CAMERAS,LENSES,FLASHES,presetState,effectiveLights} from './state.js';
import {clamp,meter,angularSize,frontalNormal,displayLightColor} from './physics.js';
import {LightingDiagram} from './diagram.js';
import {download,safeFilename,makeSheet,blobDataURL,escapeHTML as esc} from './exports.js';

const $=id=>document.getElementById(id);
const STORAGE='cos-light-studio:v1',SAVED='cos-light-studio:saved:v1';
let state=defaults(),saved=[],engine=null,engineLoading=false,renderTimer=0,saveTimer=0,toastTimer=0,snapshot=null,compareVisible=false,firstFrame=false,assetReady=false;
let pendingKind=null;
try{const raw=localStorage.getItem(STORAGE);if(raw)state=validateState(JSON.parse(raw));}catch{ /* A damaged autosave does not block opening the studio. */ }
try{const raw=JSON.parse(localStorage.getItem(SAVED)||'[]');if(Array.isArray(raw))saved=raw.slice(0,30).filter(x=>x&&typeof x.id==='string').map(x=>({...x,state:validateState(x.state)}));}catch{saved=[];}

const paths={
 camera:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M8 6l2-3h4l2 3"/><circle cx="12" cy="13" r="4"/>',
 book:'<path d="M12 5C8 2 4 3 2 4v15c3-1 6-1 10 1 4-2 7-2 10-1V4c-2-1-6-2-10 1Z"/><path d="M12 5v15"/>',
 bookmark:'<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
 download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
 compare:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 2v20M6 9l-2 3 2 3m12-6 2 3-2 3"/>',
 grid:'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18m6-18v18M3 9h18M3 15h18"/>',
 expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
 pause:'<path d="M8 5v14m8-14v14"/>',play:'<path d="m7 4 13 8-13 8V4Z"/>',
 reset:'<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',close:'<path d="m5 5 14 14M19 5 5 19"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><path d="m21 15-6-6L3 21"/>',
 code:'<path d="m8 5-6 7 6 7m8-14 6 7-6 7M14 3l-4 18"/>',
 alert:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3v1"/>',
 trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>'
};
const icon=name=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.plus}</svg>`;
function icons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
function toast(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),4300);}
function persist(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));$('autosave-status').textContent='已保存在此浏览器';}catch{$('autosave-status').textContent='本地空间不足 · 请导出';}},300);}
function persistSaved(){try{localStorage.setItem(SAVED,JSON.stringify(saved));return true;}catch{toast('浏览器存储空间不足，请导出 JSON 保存。');return false;}}
function currentLight(){return state.lights.find(l=>l.id===state.selected);}
function valueAt(path){const [a,b]=path.split('.');return a==='light'?currentLight()[b]:state[a]?.[b];}

function range(label,path,min,max,step,unit='',hint='',klass=''){
  const id='control-'+path.replace('.','-'),v=valueAt(path),digits=String(step).includes('.')?String(step).split('.')[1].length:0;
  return `<div class="control-row ${klass}"><div class="control-label-line"><label for="${id}">${label}</label><span class="value-wrap"><input type="number" data-path="${path}" data-kind="number" aria-label="${label}数值" min="${min}" max="${max}" step="${step}" value="${Number(v).toFixed(digits)}"><span class="unit">${unit}</span></span></div><input id="${id}" type="range" data-path="${path}" min="${min}" max="${max}" step="${step}" value="${v}" aria-label="${label}" style="--fill:${(v-min)/(max-min)*100}%">${hint?`<p class="control-hint">${hint}</p>`:''}</div>`;
}
function select(label,path,options){return `<div class="select-row"><label for="control-${path}">${label}</label><select id="control-${path}" data-path="${path}">${options.map(([v,l])=>`<option value="${v}" ${valueAt(path)===v?'selected':''}>${l}</option>`).join('')}</select></div>`;}
function toggle(label,path){return `<label class="switch-row"><span>${label}</span><input type="checkbox" data-path="${path}" ${valueAt(path)?'checked':''}></label>`;}
const section=title=>`<div class="control-section-title">${title}</div>`;

const modifierOf=l=>MODIFIERS.find(m=>l.modifier?m.id===l.modifier&&m.shape===l.shape&&m.width===l.width&&m.height===l.height:m.shape===l.shape&&m.width===l.width&&m.height===l.height);
function renderLightControls(){
  const l=currentLight();$('selected-light-name').textContent=l.name;
  const mod=modifierOf(l);
  const group=key=>MODIFIERS.filter(m=>m.group===key).map(m=>`<option value="${m.id}" ${mod?.id===m.id?'selected':''}>${m.label}</option>`).join('');
  $('light-controls').innerHTML=`
    <div class="select-row"><label for="flash-select">灯体标注</label><select id="flash-select" aria-label="这盏灯对应哪支闪光灯">${FLASHES.map(f=>`<option value="${f.id}" ${l.flash===f.id?'selected':''}>${f.label}</option>`).join('')}</select></div>
    <p class="control-hint">标注只影响清单和参考卡；发光与功率仍按下方参数计算。</p>
    <div class="select-row"><label for="modifier-select">发光面</label><select id="modifier-select"><option value="custom" ${!mod?'selected':''}>自定义发光面</option><optgroup label="我的柔光箱 / 灯体">${group('kit')}</optgroup><optgroup label="通用练习发光面">${group('generic')}</optgroup></select></div>
    ${range('总功率','light.power',-6,4,.1,'EV')}
    <p class="control-hint">+1 EV = 总光通量 ×2。同一盏灯内可近似读作闪光功率档：−1 EV ≈ 1/2 输出，−4 EV ≈ 1/16；不同灯具之间的绝对输出未标定。</p>
    ${section('位置 / POSITION')}
    ${range('方位角','light.azimuth',-180,180,1,'°')}
    <p class="control-hint">0° 在相机侧；±180° 在人物后方。负值在画面左侧。</p>
    <div class="control-pair">${range('水平距离','light.distance',.02,4,.01,'m')}${range('灯心高度','light.heightY',.3,3.8,.01,'m')}</div>
    ${section('柔度 / EMITTER SIZE')}
    <div class="control-pair">${range('宽','light.width',.05,2.4,.01,'m')}${range('高','light.height',.05,2.4,.01,'m')}</div>
    ${select('形状','light.shape',[['disk','圆盘 / 椭圆'],['rect','矩形']])}
    <p class="control-hint" id="softness-hint"></p>
    ${section('颜色 / COLOR')}
    ${range('色温','light.kelvin',1800,12000,100,'K','','kelvin-spectrum')}
    ${range('绿 ← 色调 → 品红','light.tint',-100,100,1,'','','tint-spectrum')}
    <details><summary class="control-section-title">精细瞄准与旋转 <span>＋</span></summary>
      ${range('左右瞄准','light.aimX',-1,1,.01,'m')}${range('上下瞄准偏移','light.aimY',-.8,.8,.01,'m')}${range('前后瞄准','light.aimZ',-1,1,.01,'m')}${range('发光面旋转','light.roll',-180,180,1,'°')}
      <p class="control-hint">瞄准偏移以面部中心为原点。矩形长边会随旋转改变方向。</p>
    </details>`;
  $('modifier-select').addEventListener('change',e=>{const m=MODIFIERS.find(x=>x.id===e.target.value);if(m)Object.assign(l,{shape:m.shape,width:m.width,height:m.height,modifier:m.id});else l.modifier='';renderLightControls();changed('lights');});
  $('flash-select').addEventListener('change',e=>{l.flash=e.target.value;changed('display');});
  updateLightList();updateReadouts();
}
function renderCameraControls(){
  const lens=LENSES.find(l=>l.id===state.camera.lens)||LENSES[0];
  $('camera-controls').innerHTML=`
    ${select('机身','camera.body',CAMERAS.map(c=>[c.id,`${c.label} · ${c.note}`]))}
    ${select('镜头','camera.lens',LENSES.map(l=>[l.id,l.label]))}
    <p class="control-hint">${lens.id==='custom'?'未限定型号：焦距 18–120 mm、光圈 ƒ/1.4 起自由调节。':`${lens.label} · ${lens.min}–${lens.max} mm · 最大 ƒ/${lens.aperture}。下方焦距与光圈已按镜头限制。`}</p>
    ${select('画幅','camera.frame',[['portrait','竖幅 · 2:3'],['square','方形 · 1:1'],['landscape','横幅 · 3:2']])}
    ${range('焦距','camera.focal',lens.min,lens.max,1,'mm')}${range('相机距面心','camera.distance',.5,4,.01,'m')}
    ${section('固定曝光 / EXPOSURE')}
    ${range('光圈','camera.aperture',lens.aperture,16,.1,'f')}
    ${range('快门 · 1 /','camera.shutter',15,1000,1,'s')}
    ${range('感光度','camera.iso',50,3200,50,'ISO')}
    ${range('曝光补偿','camera.ev',-5,5,.1,'EV')}
    <p class="control-hint">采用连续发光曝光关系。此版不模拟同步闪光、TTL 或 HSS。</p>
    ${section('颜色 / WHITE BALANCE')}
    ${range('白平衡','camera.wb',1800,12000,100,'K','','kelvin-spectrum')}${range('白平衡色调','camera.tint',-100,100,1,'','','tint-spectrum')}
    ${section('景深 / DEPTH OF FIELD')}
    ${toggle('启用物理景深','camera.dof')}${range('对焦距离','camera.focus',.4,5,.01,'m')}
    <p class="control-hint">练习光型时建议关闭景深。开启后，光圈也会改变焦外模糊。</p>
    ${section('显示辅助 / DISPLAY')}
    ${select('显示模式','render.diagnostic',[['beauty','正常画面 · ACES'],['clip','高光阈值条纹'],['falsecolor','线性亮度伪色']])}
    <p class="control-hint">条纹表示显示前任一线性通道 ≥ 1；不代表 R7 RAW 真实溢出。</p>`;
}
function renderSceneControls(){
  $('scene-controls').innerHTML=`
    ${select('拍摄对象','model.object',[['head','真实扫描人脸'],['spheres','灰球 / 白球 / 金属球']])}
    ${select('表面','model.material',[['clay','中性雕塑 · 看光型'],['skin','扫描肤色 · 表面反射'],['gray','18% 灰 · 曝光参考']])}
    <p class="control-hint">扫描肤色未含完整皮下散射；观察光型优先使用中性雕塑。</p>
    ${range('脸朝向','model.yaw',-90,90,1,'°')}${range('低头 / 抬头','model.pitch',-35,35,1,'°')}
    ${range('表面粗糙度','model.roughness',.15,.9,.01,'')}${range('肤色反射倍率','model.skinTone',.4,1,.05,'×')}
    ${section('黑棚 / ROOM')}
    ${range('墙面反射率','room.reflectance',0,.8,.005,'')}${range('地面反射率','room.floor',0,.8,.005,'')}
    ${range('均匀环境亮度','room.background',0,.06,.001,'')}
    <p class="control-hint">默认环境光为 0。墙面与地面仍会反射灯光；反射率 0 才完全吸光。</p>
    ${section('反光 / 遮光板')}
    ${select('板材','room.board',[['off','不放板'],['white','白色漫反射板'],['black','黑色吸光板'],['silver','银色反射板'],['below','下方白色反光板']])}
    <div class="select-row"><label for="board-side">摆放侧</label><select id="board-side"><option value="-1" ${state.room.boardSide<0?'selected':''}>画面左侧</option><option value="1" ${state.room.boardSide>0?'selected':''}>画面右侧</option></select></div>
    ${range('板距人物中轴','room.boardDistance',.2,1.5,.01,'m')}${range('板中心高度','room.boardHeight',.4,2.2,.01,'m')}${range('板旋转','room.boardAngle',-80,80,1,'°')}
    <p class="control-hint">侧板 80 × 110 cm。下方白板使用固定承托位置，侧板参数不影响它。</p>
    ${section('光线追踪 / RENDER')}
    ${range('反弹次数上限','render.bounces',2,12,1,'')}
    <div class="select-row"><label for="samples-select">停止采样阈值</label><select id="samples-select">${[64,128,256,512,1024,2048,4096].map(v=>`<option value="${v}" ${state.render.maxSamples===v?'selected':''}>${v} samples</option>`).join('')}</select></div>
    <p class="control-hint">更多采样减少噪点，不会增加皮肤模型本身的真实度。银板等间接反射需要更多采样。</p>`;
  $('board-side').addEventListener('change',e=>{state.room.boardSide=Number(e.target.value);changed('geometry');});
  $('samples-select').addEventListener('change',e=>{state.render.maxSamples=Number(e.target.value);if(engine){engine.state=state;engine.setPaused(false);}persist();});
}
function updateLightList(){
  $('light-list').innerHTML=state.lights.map(l=>{
    const flash=FLASHES.find(f=>f.id===l.flash)?.short;
    return `<div class="light-row ${l.id===state.selected?'active':''} ${l.enabled?'':'disabled'}" data-light="${l.id}" tabindex="0" role="button" aria-label="编辑${l.name}"><span class="light-symbol" style="color:${l.color}">${l.role}</span><span class="light-name"><strong>${l.name}${flash?` · ${flash}`:''}</strong><small>${l.power>0?'+':''}${l.power.toFixed(1)} EV · ${l.kelvin} K</small></span><button class="light-toggle" role="switch" aria-label="开关${l.name}" aria-checked="${l.enabled}" data-toggle="${l.id}"></button></div>`;}).join('');
  $('solo-button').setAttribute('aria-pressed',String(state.solo===state.selected));$('solo-button').textContent=state.solo===state.selected?'退出单独看':'单独看';
}
function renderPresets(){
  $('preset-list').innerHTML=PRESETS.map((p,i)=>`<button class="preset-button ${state.preset===p.id?'active':''}" data-preset="${p.id}"><span class="preset-index">${String(i+1).padStart(2,'0')}</span><span class="preset-title">${p.name}</span><span class="preset-mark">↗</span></button>`).join('');
  const p=PRESETS.find(p=>p.id===state.preset)||PRESETS[0];$('note-number').textContent=p.tag.slice(0,2);$('note-title').textContent=p.tag.split(' / ')[1];$('note-text').textContent=p.desc;
}
function renderSaved(){
  $('saved-list').innerHTML=saved.length?saved.map(x=>`<div class="saved-row"><button data-load="${esc(x.id)}"><strong>${esc(x.state.name)}</strong><small>${new Date(x.date).toLocaleDateString('zh-CN')} · ${x.state.lights.filter(l=>l.enabled).length} 盏灯</small></button><button data-delete="${esc(x.id)}" class="icon-button" aria-label="删除 ${esc(x.state.name)}">${icon('trash')}</button></div>`).join(''):'<p class="empty-note">保存一个灯位，下次接着练。</p>';
}
function updateReadouts(){
  const c=state.camera,l=currentLight(),a=angularSize(l);
  const b=$('softness-hint');if(b)b.textContent=`至面心 ${a.distance.toFixed(2)} m · 发光面张角约 ${a.width.toFixed(1)}° × ${a.height.toFixed(1)}°。越大的视张角通常带来越柔的阴影。`;
  $('strip-focal').innerHTML=`${c.focal} <small>mm</small>`;$('strip-aperture').textContent=`ƒ/${c.aperture}`;$('strip-shutter').textContent=`1/${c.shutter}`;$('strip-iso').textContent=c.iso;$('strip-wb').innerHTML=`${c.wb} <small>K</small>`;
  const body=CAMERAS.find(x=>x.id===c.body);
  $('lens-label').textContent=`${body?.short||'相机'} · ${c.focal} mm`;
  const n=frontalNormal(state.model.yaw,state.model.pitch),effective=effectiveLights(state),readings=effective.map(x=>meter(x,undefined,n,16)),total=readings.reduce((a,b)=>a+b,0),index=state.lights.findIndex(x=>x.id===l.id);
  $('meter-value').textContent=`${total.toFixed(1)} lx*`;$('meter-detail').textContent=`${l.name} ${readings[index].toFixed(1)} / 合计 ${total.toFixed(1)} · 仅直射估计`;$('meter-bar').style.width=`${clamp(Math.log2(total+1)/12*100,0,100)}%`;
  $('quality-select').value=state.render.quality;
  $('thirds-grid').hidden=!state.render.grid;$('grid-button').setAttribute('aria-pressed',String(state.render.grid));
  $('falsecolor-legend').hidden=state.render.diagnostic!=='falsecolor';
  $('subject-label').textContent=state.model.object==='spheres'?'GRAY / WHITE / METAL · 物理参考':'LEE PERRY SMITH / 扫描人像';
  if(snapshot){const same=['aperture','shutter','iso','ev','wb','tint'].every(k=>snapshot.state.camera[k]===c[k]);$('compare-summary').textContent=same?'A / B 曝光与白平衡相同。':'注意：A / B 的曝光或白平衡不同。';}
  diagram.draw();
}
function resizeFrame(){
  const viewport=$('viewport'),frame=$('render-frame'),aspect={portrait:2/3,square:1,landscape:1.5}[state.camera.frame];
  const rect=viewport.getBoundingClientRect(),width=Math.min(rect.width-2,(rect.height-2)*aspect),height=width/aspect;
  frame.style.width=`${Math.max(1,width)}px`;frame.style.height=`${Math.max(1,height)}px`;frame.style.aspectRatio=String(aspect);
}
function syncAll(){
  $('study-name').value=state.name;$('study-notes').value=state.notes;
  renderPresets();renderLightControls();renderCameraControls();renderSceneControls();renderSaved();updateReadouts();resizeFrame();
}
function changed(kind){
  persist();updateReadouts();updateLightList();
  // Independent pending mutations need a full scene update, never lose one in debounce.
  if(pendingKind&&pendingKind!==kind)pendingKind='scene';else pendingKind=kind;
  if(renderTimer)return;
  renderTimer=setTimeout(()=>{
    renderTimer=0;
    const next=pendingKind;pendingKind=null;
    if(engine?.ready)try{engine.apply(state,next);}catch(e){showError(e);}
  },kind==='display'?16:90);
}
function selectLight(id){state.selected=id;renderLightControls();persist();}
function applyPreset(id){state=presetState(id,state);syncAll();changed('scene');}
function syncPath(path,value){
  document.querySelectorAll('[data-path]').forEach(el=>{
    if(el.dataset.path!==path)return;
    if(el.type==='checkbox')el.checked=!!value;else if(document.activeElement!==el)el.value=value;
    if(el.type==='range')el.style.setProperty('--fill',`${(value-Number(el.min))/(Number(el.max)-Number(el.min))*100}%`);
  });
}
function handleControl(e){
  const el=e.target,path=el.dataset.path;if(!path)return;
  if(el.tagName==='SELECT'&&e.type==='input')return;
  if(el.type==='checkbox'&&e.type==='input')return;
  if(el.type==='number'&&e.type==='input'&&(el.value===''||!el.validity.valid))return;
  const [scope,key]=path.split('.'),target=scope==='light'?currentLight():state[scope];
  let val=el.type==='checkbox'?el.checked:el.tagName==='SELECT'?el.value:Number(el.value);
  if(typeof val==='number'){
    if(!Number.isFinite(val)){el.value=target[key];return;}
    val=clamp(val,Number(el.min),Number(el.max));
    const step=Number(el.step)||1;const digits=String(step).split('.')[1]?.length||0;val=Number(val.toFixed(digits));
  }
  target[key]=val;syncPath(path,val);
  let kind='lights';
  if(scope==='light'){
    if(['width','height','shape'].includes(key)){
      const m=MODIFIERS.find(m=>m.shape===target.shape&&m.width===target.width&&m.height===target.height);
      target.modifier=m?.id||'';
      const sel=$('modifier-select');if(sel)sel.value=m?.id||'custom';
    }
  }else if(scope==='camera'){
    kind=['ev','wb','tint','shutter','iso'].includes(key)||key==='aperture'&&!state.camera.dof?'display':'camera';
    if(key==='frame'){resizeFrame();kind='camera';hideCompare();}
    if(key==='lens'){
      const lens=LENSES.find(x=>x.id===val)||LENSES[0];
      state.camera.focal=clamp(state.camera.focal,lens.min,lens.max);
      state.camera.aperture=Math.max(state.camera.aperture,lens.aperture);
      renderCameraControls();
    }
  }else if(scope==='model'){
    kind=['yaw','pitch','object'].includes(key)?'geometry':'materials';
    if(key==='material'&&val==='skin'&&!engine?.skinMap)toast('扫描肤色纹理还未就绪，暂用中性表面。');
    if(key==='object'&&val==='head'&&!assetReady)toast('扫描人脸未就绪，当前显示材质球。可在场景面板重试加载。');
  }else if(scope==='room')kind=['reflectance','floor','background'].includes(key)?'materials':'geometry';
  else if(scope==='render')kind=key==='diagnostic'?'display':'scene';
  changed(kind);
}
function showError(error){
  $('loading-overlay').hidden=true;$('error-overlay').hidden=false;$('error-detail').textContent=error?.message||String(error);
  $('render-badge').innerHTML='<i></i>渲染未就绪';engine?.setPaused(true);
}
async function startEngine(){
  if(engineLoading)return;engineLoading=true;
  $('error-overlay').hidden=true;$('loading-overlay').hidden=false;
  $('loading-detail').textContent='加载本地 GPU 渲染模块；首次编译可能需要几十秒。';
  let timeout;
  try{
    const mod=await Promise.race([import('./renderer.js'),new Promise((_,reject)=>timeout=setTimeout(()=>reject(new Error('本地渲染模块加载超时。请保留启动窗口，确认完整解压后从启动脚本打开。')),70000))]);
    clearTimeout(timeout);engine?.dispose();firstFrame=false;
    engine=new mod.StudioRenderer($('render-container'),{
      progress:text=>$('loading-detail').textContent=text,
      error:showError,notice:toast,
      asset:info=>{assetReady=info.scan;$('retry-model').hidden=info.scan;if(!info.scan){state.model.object='spheres';renderSceneControls();$('retry-model').hidden=false;updateReadouts();}},
      resolution:({width,height})=>$('render-resolution').textContent=`${width} × ${height}`,
      stats:({samples,elapsed,paused,complete})=>{
        if(samples>=1&&!firstFrame){firstFrame=true;$('loading-overlay').hidden=true;}
        $('render-stats').textContent=`${samples} / ${state.render.maxSamples} samples · ${elapsed<60?`${elapsed.toFixed(0)} s`:`${Math.floor(elapsed/60)} min`}`;
        $('render-badge').innerHTML=`<i></i>${paused?'已暂停':complete?'采样完成':'路径追踪中'}`;
        $('pause-button').innerHTML=`${icon(paused?'play':'pause')}${paused?'继续':complete?'重采样':'暂停'}`;
      }
    });
    await engine.init(state);
    // A preset can be changed while the scan is downloading.
    if(engine.state!==state)engine.apply(state,'scene');
  }catch(e){clearTimeout(timeout);showError(e);}finally{engineLoading=false;}
}

async function setSnapshot(){
  try{
    if(!engine)throw new Error('渲染器还未就绪');
    const blob=await engine.capture();if(snapshot)URL.revokeObjectURL(snapshot.url);
    snapshot={url:URL.createObjectURL(blob),state:clone(state),blob};$('compare-image').src=snapshot.url;
    showCompare();toast('已记为 A。继续移动灯位，拖动分界线比较。');
  }catch(e){toast(e.message);}
}
function showCompare(){if(!snapshot)return;compareVisible=true;$('compare-layer').hidden=false;$('compare-divider').hidden=false;$('hide-compare').hidden=false;$('compare-layer').style.clipPath='inset(0 50% 0 0)';$('compare-divider').style.left='50%';updateReadouts();}
function hideCompare(){compareVisible=false;$('compare-layer').hidden=true;$('compare-divider').hidden=true;$('hide-compare').hidden=true;}
function saveStudy(){
  state.name=$('study-name').value.trim()||'未命名练习';
  const item={id:crypto.randomUUID(),date:new Date().toISOString(),state:clone(state)};
  saved.unshift(item);saved=saved.slice(0,30);if(persistSaved()){renderSaved();toast('方案已保存。也可以导出 JSON 在其他设备继续。');}persist();
}

const diagram=new LightingDiagram($('plan-canvas'),()=>state,selectLight,(id,values)=>{
  Object.assign(state.lights.find(l=>l.id===id),values);for(const [k,v] of Object.entries(values))syncPath(`light.${k}`,v);changed('lights');
});
icons();syncAll();
const resizeObserver=new ResizeObserver(resizeFrame);resizeObserver.observe($('viewport'));
document.addEventListener('input',handleControl);document.addEventListener('change',handleControl);
$('study-name').addEventListener('input',e=>{state.name=e.target.value;persist();});
$('study-notes').addEventListener('input',e=>{state.notes=e.target.value;persist();});
$('preset-list').addEventListener('click',e=>{const b=e.target.closest('[data-preset]');if(b)applyPreset(b.dataset.preset);});
$('light-list').addEventListener('click',e=>{const toggle=e.target.closest('[data-toggle]');if(toggle){const l=state.lights.find(x=>x.id===toggle.dataset.toggle);l.enabled=!l.enabled;state.solo=null;changed('lights');return;}const row=e.target.closest('[data-light]');if(row)selectLight(row.dataset.light);});
$('light-list').addEventListener('keydown',e=>{if(e.target.matches('[data-light]')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();selectLight(e.target.dataset.light);}});
$('solo-button').onclick=()=>{state.solo=state.solo===state.selected?null:state.selected;changed('lights');};
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-tab]').forEach(x=>{const yes=x===b;x.classList.toggle('active',yes);x.setAttribute('aria-selected',String(yes));$('panel-'+x.dataset.tab).hidden=!yes;});});
$('quality-select').onchange=e=>{state.render.quality=e.target.value;changed('scene');};
$('grid-button').onclick=()=>{state.render.grid=!state.render.grid;persist();updateReadouts();};
$('pause-button').onclick=()=>{if(!engine?.ready)return;if(engine.pt.samples>=state.render.maxSamples)engine.reset();else engine.setPaused(!engine.paused);};
$('fullscreen-button').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('viewport').requestFullscreen();resizeFrame();}catch{toast('此浏览器不支持全屏，请使用页面缩放。');}};
document.addEventListener('fullscreenchange',resizeFrame);
$('reset-button').onclick=()=>applyPreset(state.preset);
$('save-study').onclick=saveStudy;
$('help-button').onclick=$('limits-button').onclick=()=>$('help-dialog').showModal();
$('export-button').onclick=()=>{$('study-notes').value=state.notes;$('export-dialog').showModal();};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
$('export-json').onclick=()=>{download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),safeFilename(state.name)+'.json');toast('完整方案已导出。');};
$('export-png').onclick=async()=>{try{if(!engine)throw new Error('渲染器还未就绪');download(await engine.capture(),safeFilename(state.name)+'.png');}catch(e){toast(e.message);}};
$('export-sheet').onclick=async()=>{try{let image='';if(engine?.ready&&engine.pt.samples>=1)image=await blobDataURL(await engine.capture());const html=makeSheet(state,$('plan-canvas').toDataURL('image/png'),image);download(new Blob([html],{type:'text/html;charset=utf-8'}),safeFilename(state.name)+'-布光参考卡.html');toast('参考卡已导出，可用浏览器打开并打印为 PDF。');}catch(e){toast(e.message);}};
$('snapshot-button').onclick=setSnapshot;
$('compare-button').onclick=()=>snapshot?compareVisible?hideCompare():showCompare():setSnapshot();
$('hide-compare').onclick=hideCompare;
let comparing=false;
$('compare-divider').addEventListener('pointerdown',e=>{comparing=true;e.target.setPointerCapture(e.pointerId);});
$('compare-divider').addEventListener('pointermove',e=>{if(!comparing)return;const r=$('render-frame').getBoundingClientRect(),p=clamp((e.clientX-r.left)/r.width*100,2,98);$('compare-layer').style.clipPath=`inset(0 ${100-p}% 0 0)`;$('compare-divider').style.left=p+'%';});
$('compare-divider').addEventListener('pointerup',()=>comparing=false);$('compare-divider').addEventListener('pointercancel',()=>comparing=false);
$('saved-list').addEventListener('click',e=>{const load=e.target.closest('[data-load]'),del=e.target.closest('[data-delete]');if(load){const item=saved.find(x=>x.id===load.dataset.load);if(item){state=validateState(item.state);syncAll();changed('scene');toast('已恢复方案。');}}if(del){const removed=saved.find(x=>x.id===del.dataset.delete);saved=saved.filter(x=>x.id!==del.dataset.delete);if(!persistSaved()&&removed)saved.unshift(removed);renderSaved();}});
$('import-button').onclick=()=>$('import-file').click();
$('import-file').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>200000)throw new Error('方案文件过大，请选择黑棚导出的 JSON');const next=validateState(JSON.parse(await file.text()));state=next;syncAll();changed('scene');toast('方案已导入。');}catch(error){toast('导入失败：'+error.message);}finally{e.target.value='';}};
$('retry-button').onclick=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch{}location.reload();};
$('retry-model').onclick=()=>{state.model.object='head';startEngine();};
$('cdn-button').onclick=async()=>{const details=JSON.stringify({version:'0.3.0-local',error:$('error-detail').textContent,userAgent:navigator.userAgent,webgl2:typeof WebGL2RenderingContext!=='undefined',secureContext:isSecureContext},null,2);try{await navigator.clipboard.writeText(details);toast('诊断信息已复制，可粘贴到问题反馈中。');}catch{download(new Blob([details],{type:'application/json'}),'cos-light-diagnostic.json');}};
document.addEventListener('keydown',e=>{
  if(e.target.matches('input,select,textarea')||document.querySelector('dialog[open]')||e.ctrlKey||e.metaKey||e.altKey)return;
  if(['1','2','3'].includes(e.key)){selectLight(state.lights[Number(e.key)-1].id);}
  if(e.key.toLowerCase()==='s'){$('solo-button').click();}
  if(e.key===' '){e.preventDefault();$('pause-button').click();}
});
window.addEventListener('beforeunload',()=>{try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch{}});
startEngine();
