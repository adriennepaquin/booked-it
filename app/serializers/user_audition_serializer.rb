class UserAuditionSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :audition
  belongs_to :user
  has_many :in_the_rooms, through: :auditions
end
