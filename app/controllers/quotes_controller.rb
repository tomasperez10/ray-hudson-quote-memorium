class QuotesController < ApplicationController
    def index
        quotes = Quote.all
        render json: quotes
    end

    def user_params
        params.require(:quote).permit(:description, :link)
    end
end
