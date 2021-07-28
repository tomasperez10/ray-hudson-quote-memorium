class QuotesController < ApplicationController
    def index
        # Rails.application.load_seed
        @quotes = Quote.all
        # p Quote.all.as_json
        render json: @quotes.to_json
    end

    def create
        @quote = Quote.create(quote_params)
        render json: @quote.to_json
    end

    def link
        @quote = Quote.find_by(link: params[:link])
        render json: @quote.to_json
    end

    private

    def quote_params
      params.require(:quote).permit(:id, :description, :link)
    end
end
