class User < ApplicationRecord
    # include ActiveModel::Serializers::JSON
    attr_accessor :username

    has_many :quotes
    has_many :comments

    # def attributes
    #     {"username" => nil, "id" => nil}
    # end
end
