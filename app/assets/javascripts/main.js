$(document).ready(function(){

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
        $(topBar).animate({"padding-bottom": "2%"}, 2000)
      })
  })

})