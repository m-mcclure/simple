$( document ).ready(function() {

  var width = $(window).width();
  var backgroundShirtIsWhite = true;

  var bottomEditPanelIsUp = false;
  var imageCount = 0;
  var currentlySelectedObject = "";
  var fullWidthTextAreaIsEmpty = true;
  var textDivCount = 0;
  var currentlySelectedMinWidth = 0;
  var currentlySelectedFontSize = 12;
  var innerID = "";
  var currentFont = "Verdana";
  var currentColor = "black";

  // $('#punch').draggable();

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
    // $('nav').css('width', width);
    // $('.mobile-layout-buttons-row').css('visibility','visible');
    // $('.max-width-container').css({
    //   // 'width': width,
    //   'height': '760px',
    //   'visibility':'visible'
    //   // 'margin-top': '100px'
    // });
    // $('.shirt-panel').hide();
    //
    $('.shirt-panel').css('visibility','visible');

    $('.platen').css({
      'width':'220px',
      'height':'260px',
      'position':'fixed',
      'top':'0',
      'left':'0',
      'right':'0',
      'bottom':'0',
      'margin':'auto'
    });

    $('.shirt-panel').css({
      // 'width':'240px',
      // 'height':'300px',
      'position':'fixed',
      'top':'0px',
      'left':'0',
      'right':'0',
      'bottom':'0',
      'margin':'auto'
    });

  //   $('html, body').css({
  //     'overflow': 'hidden',
  //     'height': '100%',
  //     'position': 'fixed',
  //     'width': '100%'
  // });
  // $('.mobile-button').css('visibility', 'visible');


  // $('.edit-panel').remove();
  // $('.toggle-btns, .center-continue-btn, .edit-buttons-row').show();

  }

  // var leftPanelInsideHeight = $('.left-panel-container').height();
  // $('.right-panel-container').height(leftPanelInsideHeight);

  if (width > 1300){
    setUpBigLayout();
  } else if (width < 900){
    setUpMobileLayout();
  } else {
    $('.max-width-container').css('visibility','visible');
  }

  function toggleBackgroundShirtColor(){
    if (backgroundShirtIsWhite == true) {
      $('.shirt-panel').css("background-image", "url(images/blackShirt.jpg)");
      // $('.toggle-shirt-color-btn').css("background-image", "url(images/blankShirt.png)");
      backgroundShirtIsWhite = false;
      invertPlatenColors();

    } else {
      $('.shirt-panel').css("background-image", "url(images/whiteShirt.png)");
      // $('.toggle-shirt-color-btn').css("background-image", "url(images/blackShirt.jpg)");
      backgroundShirtIsWhite = true;
      invertPlatenColors();
    }
  }

  function invertPlatenColors(){
    if (backgroundShirtIsWhite == false) {
      $('.platen').css('outline', 'white dashed 1px');
    } else {
      $('.platen').css('outline', 'black dashed 1px');
    }
  }

  $('#radio-selector input').on('change', function() {
  if ($('input[name=color]:checked', '#radio-selector').val() == 'Black'){
    toggleBackgroundShirtColor();
  } else if ($('input[name=color]:checked', '#radio-selector').val() == 'White') {
    toggleBackgroundShirtColor();
  }
});

});
