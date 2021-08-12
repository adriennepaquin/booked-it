class UserAuditionSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :audition
  belongs_to :user

  # def audition_info
  #     {
  #       id: self.id,
  #       audition:
  #       {
  #         date: self.audition.date,
  #         time: self.audition.time,
  #         appointment: self.audition.appointment,
  #         location:
  #         {
  #           name: self.audition.location.name
  #         },
  #         producer: self.audition.producer,
  #         monologue:
  #         {
  #           role: self.audition.monologue.role
  #         },
  #         casting:
  #         {
  #           agency: self.audition.casting.agency
  #         }
  #       }
  #     }
  # end
end
