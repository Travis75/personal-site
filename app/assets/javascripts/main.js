$(document).ready(function(){

  $(window).load(function(){
    $('#body').fadeIn(1000);
  })

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
          AddHandlerToBlogs(data)
        })
        $(topBar).animate({"padding-bottom": "2%"}, 2000)
      })
  })

})

function AddHandlerToBlogs(html){
    $('li').on('click', function(e){
      e.preventDefault()
      $.ajax({
        type: "GET",
        url: this.children[0].href
      }).done(function(data){
        $("#body").empty()
        $("#body").css("display", "none")
        $("#body").append(data).fadeIn(1000)
        // $("#content").append(markdownParser.parse($("#content").text()))
      })
    })
}