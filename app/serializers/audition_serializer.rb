class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :appointment, :producer, :shows, :outfit, :response, :callback, :booked

  belongs_to :location
  belongs_to :casting
  belongs_to :monologue
  has_many :people, through: :in_the_rooms
end
