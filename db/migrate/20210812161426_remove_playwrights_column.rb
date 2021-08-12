class RemovePlaywrightsColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :monologues, :playwright_id, null: false
  end
end
