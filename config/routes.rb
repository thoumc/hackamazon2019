
Rails.application.routes.draw do
  resources :restaurants
  resources :users
  get 'welcome/index'
  root 'welcome#index'
end