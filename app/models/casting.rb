class Casting < ApplicationRecord
    has_many :auditions, dependent: :destroy

end
