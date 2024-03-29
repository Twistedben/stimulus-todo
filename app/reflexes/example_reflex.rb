# frozen_string_literal: true

class ExampleReflex < ApplicationReflex
  # Add Reflex methods in this file.
  #
  # All Reflex instances expose the following properties:
  #
  #   - connection - the ActionCable connection
  #   - channel - the ActionCable channel
  #   - request - an ActionDispatch::Request proxy for the socket connection
  #   - session - the ActionDispatch::Session store for the current visitor
  #   - url - the URL of the page that triggered the reflex
  #   - element - a Hash like object that represents the HTML element that triggered the reflex
  #
  # Example:
  #
  #   def example(argument=true)
  #     # Your logic here...
  #     # Any declared instance variables will be made available to the Rails controller and view.
  #   end
  #
  # Learn more at: https://docs.stimulusreflex.com
  def toggle
    todo = Todo.find(element.dataset[:id])
    todo.update(completed_at: (todo.completed_at? ? nil : Time.current))
  end

  def form 
    @todo = Todo.new(description: element[:value])
    @todo.valid?
    # @todo.errors.add(:description, "Can't write Blah") if element[:value] == "blah"
  end 

  def delete
    @todo = Todo.find(element.dataset[:id])&.destroy
  end 

  def edit 
    @todo = Todo.find(element.dataset[:id])
    @todo.update(description: "edited")
  end 
  def poke
    @person = Person.find(element.dataset[:id])
    @person.poke_count += 1 
    @person.save 
    
  end 
  def unpoke
    @person = Person.find(element.dataset[:id])
    @person.poke_count -= 1
    @person.save
  end

end
