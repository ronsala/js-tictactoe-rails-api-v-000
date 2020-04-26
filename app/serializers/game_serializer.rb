class GameSerializer < ActiveModel::Serializer
  binding.pry
  attributes :id, :state
end
