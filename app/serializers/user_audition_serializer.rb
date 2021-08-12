class UserAuditionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :audition_id

  has_one :audition
  has_one :user
end
