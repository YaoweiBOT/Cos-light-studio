// Local Euler offsets after coarse IK. Expose only authored, recognized bones.
export const JOINTS=[
  {id:'head',label:'头部',bone:'頭',kind:'head'},
  {id:'neck',label:'颈部',bone:'首'},
  {id:'chest',label:'上半身',bone:'上半身'},
  ...['left','right'].flatMap((side,i)=>{
    const jp=i?'左':'右',label=i?'右侧':'左侧';
    return [
      {id:side+'Hand',label:label+'手腕 · IK',bone:jp+'手首',kind:'ik'},
      {id:side+'Foot',label:label+'脚踝 · IK',bone:jp+'足首',kind:'ik'},
      {id:side+'Shoulder',label:label+'上臂',bone:jp+'腕'},
      {id:side+'Elbow',label:label+'肘',bone:jp+'ひじ'},
      {id:side+'Palm',label:label+'手掌',bone:jp+'手首',detail:'hands'},
      {id:side+'Hip',label:label+'大腿',bone:jp+'足'},
      {id:side+'Knee',label:label+'膝',bone:jp+'ひざ'},
      ...[['Thumb','拇指','親指'],['Index','食指','人指'],['Middle','中指','中指'],['Ring','无名指','薬指'],['Little','小指','小指']].flatMap(([en,zh,n])=>[0,1,2].map(k=>({
        id:side+en+k,label:label+zh+(k+1),bone:jp+n+'０１２３'[k+(en==='Thumb'?0:1)],detail:'hands'
      })))
    ];
  })
];
export const jointById=id=>JOINTS.find(j=>j.id===id);
export function boneForJoint(byName,joint) {
  return byName.get(joint.bone)||byName.get(joint.bone.replace(/[０-９]/g,c=>String(c.charCodeAt(0)-0xff10)));
}
export function sanitizeJoints(value) {
  const result={};
  for(const joint of JOINTS.filter(j=>!j.kind)) {
    const input=value?.[joint.id];if(!input)continue;
    result[joint.id]={};
    for(const axis of ['x','y','z'])result[joint.id][axis]=Number.isFinite(input[axis])?Math.max(-120,Math.min(120,input[axis])):0;
  }
  return result;
}
