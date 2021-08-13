class Casting < ApplicationRecord
    has_many :auditions, dependent: :destroy

    validates :agency, presence: true, uniqueness: true
end
