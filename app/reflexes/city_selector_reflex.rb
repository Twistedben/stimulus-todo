class CitySelectorReflex < ApplicationReflex
  def test
    puts "TEST"
    @counties = County.find(state_id: element.dataset.value)

  end 
end