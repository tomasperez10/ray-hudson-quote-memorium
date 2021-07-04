class UsersController < ApplicationController
    def index 
        render json: User.all
    end

    def create  
        render json: User.create(username: params["username"])
    end

    def show 
        render json: User.find_by(id: params["id"])
    end
end