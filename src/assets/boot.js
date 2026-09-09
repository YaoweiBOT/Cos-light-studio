/* Local build: esbuild includes the full module graph; no runtime CDN imports. */
import('./app.js').catch(error=>{
  document.getElementById('loading-overlay').hidden=true;
  document.getElementById('error-overlay').hidden=false;
  document.getElementById('error-detail').textContent='界面未能加载：'+error.message;
  document.getElementById('retry-button').onclick=()=>location.reload();
});
