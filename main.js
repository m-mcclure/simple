$( document ).ready(function() {

  var width = $(window).width();

  function setUpBigLayout(){
    $('.max-width-container').css({
      'max-width': '1400px',
      'height': '760px',
      'visibility':'visible'
      // 'margin-top': '100px'
    });
    $('.shirt-panel').css({
      'min-width':'700px'
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

  function setUpMobileLayout(){
    $('.mobile-layout-buttons-row').css('visibility','visible');

  }

  if (width > 1300){
    setUpBigLayout();
  } else if (width < 900){
    setUpMobileLayout();
  } else {
    $('.max-width-container').css('visibility','visible');
  }


});
