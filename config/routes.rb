Rails.application.routes.draw do

  root 'welcome#main'

  get '/main' => 'welcome#main'
  get '/portfolio' => 'welcome#portfolio'

  resources :articles, only: [:index, :show]
end
