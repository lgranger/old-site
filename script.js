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
    $('.title-Migo').toggleClass('title-selected');
    $('.circle-Migo').toggleClass('circle-right-selected');
  });
  $('.title-Ada').click(function(){
    $('.desc-Ada').slideToggle();
  });
});
