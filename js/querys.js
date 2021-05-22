$(document).ready(function() {



$(".q3").click(function(){
    $(".logess").css('display' , 'block');
  $(".loges").css('display' , 'none');

})



  $(".ok").click(function (){
    $(".ok").css('display' , 'none');
    $(".ok2").css('display' , 'block');
  if ($(".sobasa").children().attr('class' , '.col-lg-4 product')) {
    $(".sobasa").children().removeClass('.col-lg-4 product');
    $(".sobasa").children().addClass('col-lg-3 product');
}
  })

  $(".ok2").click(function (){
  if ($(".sobasa").children().attr('class' , '.col-lg-3 product')) {
    $(".sobasa").children().removeClass('.col-lg-3 product');
    $(".sobasa").children().addClass('col-lg-4 product');
    $(".ok2").css('display' , 'none');
    $(".ok").css('display' , 'block');
}
  })

$(".login").click(function(){
  $('#cover').css('pointer-events', 'visible')
  $('#cover').css('opacity', '1')
  $('.col-lg-12.log').css('margin-top', '0')

})



$(".title2  ").click(function(){
  $('#cover').css('pointer-events', 'none')
  $('#cover').css('opacity', '0')
  $('.col-lg-12.log').css('margin-top', '-600px')
})


$("i.fa.fa-bars").click(function() {
  $(".cov2").css('opacity', '1')
  $(".cov2").css('pointer-events', 'visible')
  $(".menu-mob").css('pointer-events', 'visible')
  $(".menu-mob").css('left', '0')
  $(".menu-mob").css('opacity', '1')

})
$(".cov2").click(function() {
  $(".cov2").css('opacity', '0')
  $(".cov2").css('pointer-events', 'none')
  $(".menu-mob").css('pointer-events', 'none')
  $(".menu-mob").css('left', '-250px')
  $(".menu-mob").css('opacity', '0')

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
