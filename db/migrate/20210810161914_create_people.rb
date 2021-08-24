class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.text :name
      t.text :position

      t.timestamps
    end
  end
end
