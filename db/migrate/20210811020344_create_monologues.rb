class CreateMonologues < ActiveRecord::Migration[6.1]
  def change
    create_table :monologues do |t|
      t.string :play
      t.belongs_to :playwright, null: false, foreign_key: true
      t.boolean :public
      t.string :genre
      t.string :role
      t.string :length
      t.string :first_line
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
