class Playwright < ApplicationRecord
    has_many :monologues, dependent: :destroy
end
