$(document).ready(function() {


  $(".login").click(function(){
    $('#cover').css('pointer-events', 'visible')
    $('#cover').css('opacity', '1')
    $('.logs').css('position', 'relative')
    $('.logs').css('top', '1px!important')

  })

  $(".title2 ,#cover ").click(function(){
    $('#cover').css('pointer-events', 'none')
    $('#cover').css('opacity', '0')
    $('.logs').css('position', 'relative')
    $('.logs').css('top', '-600px')
  })

      $(window).scroll(function(){
      if ($(this).scrollTop() > 700){
      $('.resultevideo').css('left', '0');
    }
      else {
      $('.resultevideo').css('left', '-470px'); };
  if ($(this).scrollTop() > 300) {
          if ($(this).scrollTop() > 1) {
            $('.tanes').css('opacity', '1');
            $('.tanes').css('pointer-events', 'all');
            $('#gotop').css('display', 'block');
          }
  }
else {
$('.tanes').css('opacity', '0');
$('.tanes').css('pointer-events', 'none');
$('#gotop').css('display', 'none');
}});

})
