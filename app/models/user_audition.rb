class UserAudition < ApplicationRecord
  belongs_to :user
  belongs_to :audition
  has_many :in_the_rooms, through: :auditions

end
