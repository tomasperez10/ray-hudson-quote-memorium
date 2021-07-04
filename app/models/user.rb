class User < ApplicationRecord
    include ActiveModel::Serializers::JSON

    has_many :quotes

    def attributes
        {"username" => nil, "id" => nil}
    end
end
