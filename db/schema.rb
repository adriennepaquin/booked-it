# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_11_020344) do

  create_table "auditions", force: :cascade do |t|
    t.date "date"
    t.string "time"
    t.boolean "appointment"
    t.integer "location_id", null: false
    t.string "producer"
    t.integer "monologue_id", null: false
    t.integer "casting_id", null: false
    t.string "shows"
    t.string "outfit"
    t.string "response"
    t.boolean "callback"
    t.boolean "booked"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["casting_id"], name: "index_auditions_on_casting_id"
    t.index ["location_id"], name: "index_auditions_on_location_id"
    t.index ["monologue_id"], name: "index_auditions_on_monologue_id"
  end

  create_table "castings", force: :cascade do |t|
    t.string "agency"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "in_the_rooms", force: :cascade do |t|
    t.integer "audition_id", null: false
    t.integer "person_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["audition_id"], name: "index_in_the_rooms_on_audition_id"
    t.index ["person_id"], name: "index_in_the_rooms_on_person_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "monologues", force: :cascade do |t|
    t.string "play"
    t.integer "playwright_id", null: false
    t.boolean "public"
    t.string "genre"
    t.string "role"
    t.string "length"
    t.string "first_line"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["playwright_id"], name: "index_monologues_on_playwright_id"
    t.index ["user_id"], name: "index_monologues_on_user_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "playwrights", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_auditions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "audition_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["audition_id"], name: "index_user_auditions_on_audition_id"
    t.index ["user_id"], name: "index_user_auditions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "auditions", "castings"
  add_foreign_key "auditions", "locations"
  add_foreign_key "auditions", "monologues"
  add_foreign_key "in_the_rooms", "auditions"
  add_foreign_key "in_the_rooms", "people"
  add_foreign_key "monologues", "playwrights"
  add_foreign_key "monologues", "users"
  add_foreign_key "user_auditions", "auditions"
  add_foreign_key "user_auditions", "users"
end
