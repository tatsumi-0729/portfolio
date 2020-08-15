Rails.application.routes.draw do

  root to: "article#index"

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :article, only: [:index, :show, :destroy]
      post 'article/create', to: 'article#create'
    end
  end

  get 'contact/index', to: 'contact#index'

  namespace :api, {format: 'json'} do
    namespace :v1 do
      post 'contact/create', to: 'contact#create'
    end
  end

end
