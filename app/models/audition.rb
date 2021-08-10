class Audition < ApplicationRecord
  belongs_to :location
  belongs_to :monologue
  belongs_to :casting
end
