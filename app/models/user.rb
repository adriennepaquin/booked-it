class User < ApplicationRecord
    has_secure_password

    has_many :monologues, dependent: :destroy
    has_many :user_auditions, dependent: :destroy
    has_many :auditions, through: :user_auditions, dependent: :destroy

    validates :username, :password, :password_confirmation, presence: {message: "must be present"}
    validates :username, uniqueness: {message: "already taken"}
    validates :password, confirmation: true
    validates :password_confirmation, presence: {message: "Passwords must match"}
    validates :password, length: { minimum: 8, too_short: "must be at least 8 characters" }
end
