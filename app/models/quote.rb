class Quote < ApplicationRecord
    # include ActiveModel::Serializers::JSON

    has_many :comments
    belongs_to :user

    def self.current_user 
        current_user = User.last
    end

    # def attributes
    #     {"description" => nil, "link" => nil, "id" => nil}
    # end
end
