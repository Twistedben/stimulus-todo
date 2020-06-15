class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :task_list, null: false, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
