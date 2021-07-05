class Quote < ApplicationRecord
    include ActiveModel::Serializers::JSON

    belongs_to :user

    def self.current_user 
        current_user = User.last
    end

    def attributes
        {"description" => nil, "link" => nil, "id" => nil}
    end
end
