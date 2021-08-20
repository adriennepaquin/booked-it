class MonologueSerializer < ActiveModel::Serializer
  attributes :id, :play, :public, :genre, :role, :length, :first_line, :playwright, :user_id, :mono_pdf
end
