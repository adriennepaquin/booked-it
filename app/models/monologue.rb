class Monologue < ApplicationRecord
  belongs_to :user
  has_many :auditions, dependent: :destroy

  has_one_attached :mono_pdf

  validates :role, :play, :playwright, :first_line, :user_id, presence: {message: "must be present"}
end
