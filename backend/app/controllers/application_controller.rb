class ApplicationController < ActionController::API
    helper_method :current_user, :logged_in?

    def current_user
        user = User.find_by(id: params[:id])
    end

    def logged_in?
        !!current_user
    end
end
