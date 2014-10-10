$(document).ready(function(){

$('.slider').slick()

$("h4").hover(
  function(){$(this).css('border-bottom', '2px solid black')},
  function(){$(this).css('border-bottom', '')}
  )
})