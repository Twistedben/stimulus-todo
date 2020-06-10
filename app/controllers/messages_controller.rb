class MessagesController < ApplicationController
  def index
    @person = Person.all
  end
end
