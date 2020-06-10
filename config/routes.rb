Rails.application.routes.draw do
  resources :people
  root "todos#index"
  resources :todos
  
  get "/messages.html", to: "messages#index"
  
end
