class ArticleController < ApplicationController

  @Articles = Article.all
  render json: @Articles
end
