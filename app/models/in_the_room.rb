class InTheRoom < ApplicationRecord
  belongs_to :audition, dependent: :destroy
  belongs_to :person, dependent: :destroy
end
