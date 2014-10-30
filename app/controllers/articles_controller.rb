class ArticlesController < ApplicationController

  def index
    render layout: false
  end

  def show
    @article = Article.find(params[:id])
    render layout: false
  end

end
