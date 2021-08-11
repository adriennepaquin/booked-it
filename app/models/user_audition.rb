class UserAudition < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :audition, dependent: :destroy
end
