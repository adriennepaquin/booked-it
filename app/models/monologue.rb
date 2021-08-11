class Monologue < ApplicationRecord
  belongs_to :playwright, dependent: :destroy
  belongs_to :user, dependent: :destroy
  has_many :auditions
end
