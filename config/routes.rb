Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:new, :index, :create]
      resource :session, only: [:new, :create, :destroy]
      resources :posts, only: [:create, :destroy, :show, :index, :update]
      resources :comments, only: [:create, :destroy]
      resources :likes, only: [:create, :destroy]
      get 'search/:username', to: 'users#search'
  end
end
