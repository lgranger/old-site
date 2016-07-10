$( document ).ready(function() {
  $('.mail').click(function(){
    $('.email').slideToggle();
  });
  $('.titleCLC').click(function(){
    $('p.CLC').slideToggle();
    // $(this).css({
    //   "color": "#FFE066"
    // });
  });
});
