$(document).ready(function(){

$('.slider').slick()

$("#blog").hover(

  function(){console.log(this)},

  function(){console.log(this)})

$("#blog").hover(

  function(){$(this).css('border-bottom', '2px solid black')})

})