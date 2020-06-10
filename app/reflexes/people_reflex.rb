# frozen_string_literal: true

class PeopleReflex < ApplicationReflex
  def change 
    p "Test"
  end 
  def submit 
    @person = Person.new
  end 
end
