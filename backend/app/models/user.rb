class User < ApplicationRecord
    include ActiveModel::Serializers::JSON

    has_many :quotes

    def attributes
        {"description" => nil, "id" => nil}
    end
end
