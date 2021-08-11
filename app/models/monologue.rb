class Monologue < ApplicationRecord
  belongs_to :playwright
  belongs_to :user
  has_many :auditions, dependent: :destroy
end
