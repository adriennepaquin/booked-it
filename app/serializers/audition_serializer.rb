class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :appointment, :producer, :shows, :outfit, :response, :callback, :booked

  belongs_to :location
  belongs_to :casting
  belongs_to :monologue
  # has_many :in_the_rooms
  has_many :people, through: :in_the_rooms

  # def display_people
  #   self.in_the_rooms.map{ |people| people.person}
  # end

end
