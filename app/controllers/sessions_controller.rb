class SessionsController < ApplicationController

    
    # def new
    #     if logged_in?
    #       redirect_to user_path(current_user)
    #     end
    # end
    
    def create
        @user = User.find_by(id: params[:session][:id])
        if @user && @user.authenticate(params[:session][:username])
          session[:user_id] = @user.id
          redirect_to user_path(@user)
        else
          flash[:danger] = "Error: username is incorrect or not available"
          render :new
        end
    end

end