$( document ).ready(function() {
  $('.mail').click(function(){
    $('.email').slideToggle();
  });
  $('.title').click(function(){
    $('.title').next(div).children.slideToggle();
  });
});
