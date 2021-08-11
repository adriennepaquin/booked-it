class Person < ApplicationRecord
    has_many :in_the_rooms
    has_many :auditions, through: :in_the_rooms
end
