Rails.application.routes.draw do
  resources :accounts
  resources :states, only: :index do 
    resources :counties, only: :index do
      resources :cities, only: :index
    end 
  end 
  resources :people
  root "todos#index"
  resources :todos
  
  get "/messages.html", to: "messages#index"
  get "/timezone", to: "people#timezone"
  
end
