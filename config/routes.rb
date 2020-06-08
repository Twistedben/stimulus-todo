Rails.application.routes.draw do
  resources :people
  root "todos#index"
  resources :todos

end
