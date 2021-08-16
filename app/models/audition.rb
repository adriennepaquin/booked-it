class Audition < ApplicationRecord
  belongs_to :location
  belongs_to :monologue
  belongs_to :casting
  has_many :user_auditions, dependent: :destroy
  has_many :users, through: :user_auditions, dependent: :destroy
  has_many :in_the_rooms, dependent: :destroy
  has_many :people, through: :in_the_rooms, dependent: :destroy

  validates :date, :time, :location_id, :producer, :casting_id, :shows, presence: {message: "must be present"}

  # def display_people
  #   {
  #     id: self.id,
  #     date: self.date,
  #     people: self.in_the_rooms.map do |people|
  #       {
  #         name: people.person.name,
  #         position: people.person.position
  #       }
  #     end
  #   }
  # end
end
