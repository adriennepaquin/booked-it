class Audition < ApplicationRecord
  belongs_to :location, dependent: :destroy
  belongs_to :monologue, dependent: :destroy
  belongs_to :casting, dependent: :destroy
  has_many :user_auditions
  has_many :users, through: :user_auditions
end
