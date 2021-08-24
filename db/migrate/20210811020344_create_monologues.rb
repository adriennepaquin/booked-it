class CreateMonologues < ActiveRecord::Migration[6.1]
  def change
    create_table :monologues do |t|
      t.text :play
      t.belongs_to :playwright, null: false, foreign_key: true
      t.boolean :public
      t.text :genre
      t.text :role
      t.text :length
      t.text :first_line
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
