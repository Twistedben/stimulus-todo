class AddPokeToPerson < ActiveRecord::Migration[6.0]
  def change
    add_column :people, :poke_count, :integer, default: 0
  end
end
