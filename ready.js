/*
  ready.js
  Author: Lackneets Chang < lackneets@gmail.com >
*/

(function(){
  function attachEvent(element, event, fn) {
    if (element.addEventListener) {
      element.addEventListener(event, fn, false);
    } else if (element.attachEvent) { 
      element.attachEvent('on' + event, fn);
    }
  }

   window.ready = window.onReady = function(func) {
    if (document.readyState == 'complete') {
      func();
    } else {
      attachEvent(window, 'load', func);
    }
  }
})();
