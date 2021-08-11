class Audition < ApplicationRecord
  belongs_to :location
  belongs_to :monologue
  belongs_to :casting
  has_many :user_auditions, dependent: :destroy
  has_many :users, through: :user_auditions, dependent: :destroy
end
