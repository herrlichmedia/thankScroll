(function ( $ ) {

  $.fn.thankScroll = function( options ) {

    var scrollDocument = $(document), 
      thisEl = this,
      scrolledPx = 0,
      addedPx,
      scrollIndex,
      settings = $.extend({
              animate: true,
              firstAnimationDuration: 1000,
              scrollAnimationDuration: 200,
              localStorage: true
          }, options );
 

    if(typeof(Storage) !== void(0) && settings.localStorage){ // local storage is supported   
      var thankScrollIndex = localStorage.getItem('thankScrollIndex');
      
      if(thankScrollIndex){
        scrollIndex = parseInt(thankScrollIndex); // Get last ScrollIndex from local Storage
      }else{
        localStorage.setItem('thankScrollIndex',0); // Local storage had no existing scrollIndex, so we create one
        scrollIndex = 0;
      }
    }else{
      var scrollIndex = 0; // Because LS is not supported, we always start with 0
    }

    /* First Animation YES or NO */
    if(settings.animate && scrollIndex != 0){ // Yes
    
      jQuery({ Counter: 0 }).animate({ Counter: scrollIndex }, {
        duration: settings.firstAnimationDuration,
          easing: 'swing',
          step: function () {
            thisEl.text(Math.ceil(this.Counter));
          }
      });
    
    }else{ // No

      thisEl.text(scrollIndex);

    }

    var lastScrollPos = scrollIndex; // If Pixels are added, this val is base for the new animation. Only important for animation = true

    //****** SCROLLACTION ******//
    scrollDocument.scroll(function() {
      
        var lastPx = scrolledPx; // Last Position
        scrolledPx = scrollDocument.scrollTop(); // New Position

        var scrollDiff = scrolledPx - lastPx;  // Only Count if User scrolles down

        if(scrollDiff >= 0){ 

          scrollIndex = scrollIndex + scrollDiff; // Reset the ScrollInde
          
          /* Animation on Scroll YES or NO */
          if(settings.animate){ // Yes

            jQuery({ Counter: lastScrollPos }).animate({ Counter: scrollIndex }, {
            duration: settings.scrollAnimationDuration,
              easing: 'swing',
              step: function () {
                thisEl.text(Math.ceil(this.Counter));
              }
          });

          lastScrollPos = scrollIndex; // Update LastScrollPos for next Animation

        }else{ // No

          thisEl.text(scrollIndex); // Change Text withour Animation

        }
        if(typeof(Storage) !== void(0) && settings.localStorage){
            localStorage.setItem('thankScrollIndex',scrollIndex); // Set new local Storage Val
          }

        }
    })
  };

}( jQuery ));
