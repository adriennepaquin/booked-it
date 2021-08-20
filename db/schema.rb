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

ActiveRecord::Schema.define(version: 2021_08_19_180854) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.integer "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

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
    t.boolean "public"
    t.string "genre"
    t.string "role"
    t.string "length"
    t.string "first_line"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "playwright"
    t.index ["user_id"], name: "index_monologues_on_user_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "position"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "auditions", "castings"
  add_foreign_key "auditions", "locations"
  add_foreign_key "auditions", "monologues"
  add_foreign_key "in_the_rooms", "auditions"
  add_foreign_key "in_the_rooms", "people"
  add_foreign_key "monologues", "users"
  add_foreign_key "user_auditions", "auditions"
  add_foreign_key "user_auditions", "users"
end
