class ArticleController < ApplicationController

  # 一覧表示
  def index
    @Articles = Article.all
    @Articles.each do |article|
      eyecatch = article.avatar
      article.image = encode_base64(eyecatch)
    end
    render json: @Articles
  end

  # 詳細画面
  def show
    article = Article.find(params[:id])
    article.increment!(:count)
    eyecatch = article.avatar #avatarは添付した画像ファイル
    # if eyecatch.present?
    article.image = encode_base64(eyecatch)# 画像ファイルを1.で定義したメソッドでBase64エンコードし、renderするデータに追加する
    render json: article
    # end
  end


   # 新規投稿
   def create

    if session[:user_id] == nil
      render json: 'user false'
      return
    end

    @Article = Article.create(create_params)
    @Article.user_id = session[:user_id]
    if @Article.save
      @Article.parse_base64 = create_params[:image]
      render "index", json: @Article, status: :created
    else
      render json: @Article.errors, status: :unprocessable_entity
    end

  end

  # 各モデルのレコードに添付された画像ファイルをBase64でエンコードする
  def encode_base64(eyecatch)
    image = Base64.encode64(eyecatch.download) # 画像ファイルをActive Storageでダウンロードし、エンコードする
    blob = ActiveStorage::Blob.find(eyecatch[:id]) # Blobを作成
    "data:#{blob[:content_type]};base64,#{image}" # Vue側でそのまま画像として読み込み出来るBase64文字列にして返す
  end

  private
  def create_params
    params.require(:article).permit(:title, :content, :image)
  end





end
