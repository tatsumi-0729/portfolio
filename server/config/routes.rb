Rails.application.routes.draw do

  root to: "article#index"

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :board, only: [:index, :show, :create, :destroy]
      # post 'board/find', to: 'board#find'
    end
  end

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :contact, only: [:create]
      # post 'board/find', to: 'board#find'
    end
  end

end
