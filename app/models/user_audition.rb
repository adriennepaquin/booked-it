class UserAudition < ApplicationRecord
  belongs_to :user
  belongs_to :audition
  has_many :in_the_rooms, through: :auditions

  # def display_people
  #   {
  #     id: self.id,
  #     audition: self.audition,
  #     people: self.audition.in_the_rooms.map do |people|
  #       {
  #         name: people.person.name,
  #         position: people.person.position
  #       }
  #     end
  #   }
  # end
end
