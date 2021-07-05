class QuotesController < ApplicationController
    def index
        # Rails.application.load_seed
        quotes = Quote.all
        # p Quote.all.as_json
        render json: quotes
    end

    def create
        render json: Quote.create(quote_params)
    end

    private

    def post_params
      params.require(:post).permit(:description, :link)
    end
end
