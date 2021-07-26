Rails.application.routes.draw do

  resources :comments
  # get 'quotes/index'
  resources :users
  resources :quotes

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
