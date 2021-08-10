class CreateCastings < ActiveRecord::Migration[6.1]
  def change
    create_table :castings do |t|
      t.string :agency
      t.string :notes

      t.timestamps
    end
  end
end
