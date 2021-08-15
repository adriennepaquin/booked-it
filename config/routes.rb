Rails.application.routes.draw do
  resources :monologues, only: [:index, :show, :create]
  resources :people
  resources :in_the_rooms
  resources :castings, only: [:index, :create]
  resources :auditions, only: [:index, :create]
  resources :user_auditions, only: [:show]
  resources :locations, only: [:index, :create]
  # resources :users

  # post "/login", to: "sessions#create"
  post "/login", to: "users#login"
  post "/signup", to: "users#signup"
  # delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#me"
  get "/users", to: "users#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
