class CreateCastings < ActiveRecord::Migration[6.1]
  def change
    create_table :castings do |t|
      t.text :agency
      t.text :notes

      t.timestamps
    end
  end
end
