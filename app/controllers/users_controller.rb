class UsersController < ApplicationController

    def index
        @users = User.all 
        render json: @users.to_json
    end

    def new
        @user = User.new
        render json: @user.to_json   
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            session[:user_id] = @user.id
            redirect_to user_path(@user)
        else
            render :new
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user.to_json
    end

    private

    def user_params
      params.require(:user).permit(:username, :id)
    end
end
