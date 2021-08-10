class CreateAuditions < ActiveRecord::Migration[6.1]
  def change
    create_table :auditions do |t|
      t.date :date
      t.string :time
      t.boolean :appointment
      t.belongs_to :location, null: false, foreign_key: true
      t.string :producer
      t.belongs_to :monologue, null: false, foreign_key: true
      t.belongs_to :casting, null: false, foreign_key: true
      t.string :shows
      t.string :outfit
      t.string :response
      t.boolean :callback
      t.boolean :booked

      t.timestamps
    end
  end
end
