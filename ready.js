/*
  ready.js
  by Lackneets Chang < lackneets@gmail.com >
*/
window.ready = window.onReady = function(fn) {
  if (document.readyState == 'complete'){
    fn();
  }else if(document.addEventListener){
    window.addEventListener('load', fn, false);
  }else{
    window.attachEvent('onload', fn);
  }
}