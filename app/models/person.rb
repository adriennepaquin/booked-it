class Person < ApplicationRecord
    has_many :in_the_rooms, dependent: :destroy
    has_many :auditions, through: :in_the_rooms, dependent: :destroy

    validates :name, presence: {message: "must be present"}
end
