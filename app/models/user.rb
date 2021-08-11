class User < ApplicationRecord
    has_secure_password
    has_many :monologues
    has_many :user_auditions
    has_many :auditions, through: :user_auditions
end
