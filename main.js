$( document ).ready(function() {

  var width = $(window).width();

  function makeBigLayout(){
    $('.max-width-container').css({
      'max-width': '1400px',
      'height': '760px'
      // 'margin-top': '100px'
    });
    $('.shirt-panel').css({
      // 'height': '700px'
    });
    $('.edit-panel').css({
      'width': '500px'
    });
    $('.platen').css({
      'height': '300px',
      'width': '262.5px',
      'margin-top':'120px'
    });
  }

  if (width > 1300){
    makeBigLayout();

  }


});
