class AddSettingsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :people, :settings, :json
  end
end
