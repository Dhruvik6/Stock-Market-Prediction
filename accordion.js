"use strict";
$(document).ready(function(){

            var icons = {
                header: "zmdi zmdi-chevron-down",
                activeHeader: "zmdi zmdi-chevron-up"
            };
            $("#multi-open" ).accordion({
                heightStyle: "content",
                icons: icons
            });
            $( "#sclae-accordion" ).accordion({
                heightStyle: "content",
                icons: icons
            });
            $( "#single-open" ).accordion({
                heightStyle: "content",
                icons: icons
            });
            $( "#color-accordion" ).accordion({
                heightStyle: "content",
                icons: icons
            });


        if($(".accordion-msg").attr('aria-expanded') == 'true'){
            $(".accordion-msg").addClass("scale_active");
        }
                    "use strict";
$(document).ready(function() {
    // $('.theme-loader').addClass('loaded');
    $('.theme-loader').animate({
        'opacity': '0',
    }, 1200);
    setTimeout(function() {
        $('.theme-loader').remove();
    }, 2000);
    // $('.pcoded').addClass('loaded');
});

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}
        else{
            $(".accordion-msg").removeClass("scale_active");
        }
    });
