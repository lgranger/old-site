$( document ).ready(function() {
  $('.mail').click(function(){
    $('.email').slideToggle();
  });
  $('.title-CLC').click(function(){
    $('.desc-CLC').slideToggle();
    $('.title-CLC').toggleClass('title-selected');
    $('.circle-CLC').toggleClass('circle-right-selected');
  });
  $('.title-Migo').click(function(){
    $('.desc-Migo').slideToggle();
  });
  $('.title-Ada').click(function(){
    $('.desc-Ada').slideToggle();
  });
});
