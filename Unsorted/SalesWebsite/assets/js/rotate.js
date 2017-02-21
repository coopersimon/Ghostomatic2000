rotate = function(images){
  $(function(){
    $.each(images, function(i,v){
      $('.rotatebox .images').append('<img src="' + v + '" data-nth="' + i + '" />');
    });
    $('.rotatebox .images img').css('z-index', '1');
    $('.rotatebox .images img').first().css('z-index', '2');
    $('.rotatebox .slider').slider({
      min: 0,
      max: (images.length * 2) - 1,
      value: 0,
      slide: function(evt, ui){
        target = ui.value % images.length;
        $('.rotatebox .images img').css('z-index', '1');
        $('.rotatebox .images img[data-nth=' + target + ']').css('z-index', '2');
      },
    });
  });
};
