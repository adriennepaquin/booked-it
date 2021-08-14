class Monologue < ApplicationRecord
  belongs_to :user
  has_many :auditions, dependent: :destroy

  validates :play, :playwright, :first_line, :user_id, presence: {message: "must be present"}
end
