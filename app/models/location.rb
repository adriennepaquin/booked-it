class Location < ApplicationRecord
    has_many :auditions, dependent: :destroy
end
