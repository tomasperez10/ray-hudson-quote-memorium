class QuotesController < ApplicationController
    def index
        render json: Quote.all
    end

    def create
        render json: Quote.create(quote_params)
    end

    private

    def post_params
      params.require(:post).permit(:description, :link)
    end
end
