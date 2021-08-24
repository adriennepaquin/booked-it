class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.text :name
      t.text :address
      t.text :notes

      t.timestamps
    end
  end
end
