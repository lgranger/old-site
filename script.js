$( document ).ready(function() {
  $('.mail').click(function(){
    $('.email').slideToggle();
  });
  $('.title-CLC').click(function(){
    $('.desc-CLC').slideToggle();
    $('.title-CLC').toggleClass('title-right-selected');
    $('.circle-CLC').toggleClass('circle-right-selected');
  });
  $('.title-JSH').click(function(){
    $('.desc-JSH').slideToggle();
    $('.title-JSH').toggleClass('title-left-selected');
    $('.circle-JSH').toggleClass('circle-left-selected');
  });
  $('.title-Migo').click(function(){
    $('.desc-Migo').slideToggle();
    $('.title-Migo').toggleClass('title-right-selected');
    $('.circle-Migo').toggleClass('circle-right-selected');
  });
  $('.title-FB').click(function(){
    $('.desc-FB').slideToggle();
    $('.title-FB').toggleClass('title-left-selected');
    $('.circle-FB').toggleClass('circle-left-selected');
  });
  $('.title-Ada').click(function(){
    $('.desc-Ada').slideToggle();
    $('.title-Ada').toggleClass('title-right-selected');
    $('.circle-Ada').toggleClass('circle-right-selected');
  });
  $('.title-HHS').click(function(){
    $('.desc-HHS').slideToggle();
    $('.title-HHS').toggleClass('title-right-selected');
    $('.circle-HHS').toggleClass('circle-right-selected');
  });
});
