class CreatePlaywrights < ActiveRecord::Migration[6.1]
  def change
    create_table :playwrights do |t|
      t.text :name

      t.timestamps
    end
  end
end
