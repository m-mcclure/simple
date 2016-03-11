$( document ).ready(function() {

  var width = $(window).width();

  function makeBigLayout(){
    $('.max-width-container').css({
      'max-width': '1300px',
      'height': '760px'
    });
    $('.shirt-panel').css({
      // 'height': '700px'
    });
  }

  if (width > 1300){
    // makeBigLayout();

  }


});
