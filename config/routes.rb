Rails.application.routes.draw do
  resources :monologues, only: [:index, :show, :create, :update]
  resources :people
  resources :in_the_rooms
  resources :castings, only: [:index, :create]
  resources :auditions, only: [:index, :create, :update, :show, :destroy]
  # resources :auditions
  resources :user_auditions, only: [:show]
  resources :locations, only: [:index, :create]
  # resources :users

  # post "/login", to: "sessions#create"
  post "/login", to: "users#login"
  post "/signup", to: "users#signup"
  # delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#me"
  get "/users", to: "users#index"
  post 'rails/active_storage/direct_uploads', to: 'direct_uploads#create'
  get "/pdfs", to: "monologues#pdf"
end
