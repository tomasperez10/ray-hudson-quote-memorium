class UsersController < ApplicationController

    def index 
        render json: User.all
    end

    def new
        user = User.new
        render json: user   
    end

    def create
        user = User.new(user_params)
        
        if user.save
            session[:user_id] = user.id
            redirect_to user_path(user)
        else
            render :new
        end
    end

    def show
        render json: User.find_by(id: params[:id])
    end

    private

    def user_params
      params.require(:user).permit(:username, :id)
    end
end
