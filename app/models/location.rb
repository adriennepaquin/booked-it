class Location < ApplicationRecord
    has_many :auditions, dependent: :destroy

    validates :name, presence: true, uniqueness: true
end
