$(document).ready(function(){
  // $('.slider').slick({
  //   slidesToScroll: 1,
  //   autoplay: true,
  // })
  $(".owl-carousel").owlCarousel({
    singleItem: true,
    autoPlay: 5000
  });

  $(".blog_portfolio").hover(
    function(){$(this).css('border-bottom', '2px solid black')},
    function(){$(this).css('border-bottom', '')}
  )

  $('.blog_portfolio').on('click', function(e){
    e.preventDefault();
    var whereTo = $(this).children()[0].href
    var topBar = $(this).parent().parent()[0]
      $(topBar).animate({"padding-bottom":$(window).height()}, 2000, function(){
        $.ajax({
          type: "GET",
          url: whereTo
        }).done(function(data){
          $('#body').empty()
          $('#body').append(data)
        })
        $(topBar).animate({"padding-bottom": "0%"}, 2000)
      })
  })

})