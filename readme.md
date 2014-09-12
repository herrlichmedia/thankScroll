# thankScroll

Show users your love for every single pixel they´ve scrolled on your website by using the thankScroll jQuery Plugin from herrlich media.

*I don´t need to tell you, that this plugin is very lightweight (>1KB) and easy-to-use… 
Upps, now I did.*

##Info

This plugin uses the localstorage, if you want, to store the overall scrolled pixels for the whole domain. If you just want to get the scrolled pixels fresh for every reload, just set the localStorage option to "false".

You can decide if the upcount should be animated or not. If you decide to keep it activated you can specify the time it takes to count the intial upcount after the page reload (firstAnimationDuration) and for each change (scrollAnimationDuration).


### Usage
1. Integrate the plugin in your header or footer.
2. Add the container your pixelstats should appear.
3. Initialise it wherever you want. For instance on document ready.

```html
<div>Thanks for <span id="thankScrollIndex"></span>px of your attention</div>
```

```javascript
$(document).ready(function(){
  $('#thankScrollIndex').thankScroll();
})
```

### Default Options
```javascript
$(document).ready(function(){
  $('#thankScrollIndex').thankScroll({
    animate: true,
    firstAnimationDuration: 1000,
    scrollAnimationDuration: 200,
    localStorage: true
  });
})
```
