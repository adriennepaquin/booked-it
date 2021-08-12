class RemovePlaywrightsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :playwrights
  end
end
