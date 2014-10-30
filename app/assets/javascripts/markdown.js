var markdownParser = (function(){
  return {
    parse: function(text){
      return marked(text)
    }
  }
})()

var markdownController = function(){
  $("#article_content").on("keyup", function(){
    var text = $('#article_content').val();
    var parsedText = markdownParser.parse(text);
    markdownView.update(parsedText);
  })
}

var markdownView = (function(){
  return {
    update: function(parsedText){
      $(".preview").html(parsedText);
    }
  }
})()

$(document).ready(function(){
  markdownController();
})