class AuditionSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :appointment, :location_id, :producer, :monologue_id, :casting_id, :shows, :outfit, :response, :callback, :booked

  has_one :location
  has_one :casting
  has_one :monologue
end
