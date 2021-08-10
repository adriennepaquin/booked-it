Rails.application.routes.draw do
  resources :playwrights
  resources :monologues
  resources :people
  resources :in_the_rooms
  resources :castings
  resources :auditions
  resources :user_auditions
  resources :locations
  resources :users

  post "/login", to: "sessions#create"
  detele "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
