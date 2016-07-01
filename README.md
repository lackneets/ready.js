# ready.js

equivalent to $.ready

## Deprecated!!

Use this instead ( from http://youmightnotneedjquery.com/ )
```js
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}
```

```js
window.ready=function(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})};
```

If you know [jQuery.ready](https://learn.jquery.com/using-jquery-core/document-ready/), then you know what this is.

```js
ready(function() {
    console.log( "document is ready!" );
});
```
