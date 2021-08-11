class ChangeMonologueColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :monologues, :added_by_user_id, :integer
    add_column :monologues, :user_id, :integer
    add_foreign_key :monologues, :users
  end
end
