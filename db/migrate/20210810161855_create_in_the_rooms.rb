class CreateInTheRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :in_the_rooms do |t|
      t.belongs_to :audition, null: false, foreign_key: true
      t.belongs_to :person, null: false, foreign_key: true

      t.timestamps
    end
  end
end
