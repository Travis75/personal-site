Rails.application.routes.draw do

  root 'welcome#main'

  get '/main' => 'welcome#main'

  resources :articles, only: [:index, :show]
end
