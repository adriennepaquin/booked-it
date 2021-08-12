class ChangeColumnInMonologues < ActiveRecord::Migration[6.1]
  def up
    add_column :monologues, :playwright, :string
  end
  def down
    remove_column :monologues, :playwright_id
  end
end
