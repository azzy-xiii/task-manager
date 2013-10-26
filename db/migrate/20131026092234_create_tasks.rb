class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :state
      t.string :description
      t.integer :owner_id
      t.integer :performer_id

      t.timestamps
    end

    add_index :tasks, :performer_id
    add_index :tasks, :owner_id
  end
end
