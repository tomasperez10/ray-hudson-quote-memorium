class UsersController < ApplicationController
    helper_method :logged_in?, :current_user

    def new
        if logged_in?
            redirect_to quotes_path(current_user)
        else
            user = User.new
        end
    end

    def create
        user = User.new(user_params)
        if user.save
          redirect_to quotes_path(user)
        else
          render :new
        end
    end

    private

    def user_params
        params.require(:user).permit(:username)
    end
end
