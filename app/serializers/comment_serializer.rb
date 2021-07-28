class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :quote_id, :user_id
  belongs_to :quote
  belongs_to :user
end
