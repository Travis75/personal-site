class ArticlesController < ApplicationController

  def index
    render layout: false
  end

  def show
    @article = Article.find(params[:id])
    render layout: false
  end

  def new
    @article = Article.new
  end

  def create
    Article.create(article_params)
    redirect_to "/"
  end

  private
  def article_params
    params.require(:article).permit(:title, :content, :image_link)
  end

end
