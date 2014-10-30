Rails.application.routes.draw do

  root 'welcome#main'

  get '/main' => 'welcome#main'
  get '/projects' => 'welcome#projects'

  resources :articles, only: [:index, :show, :new, :create]
end
