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

    def link
        render json: Quote.find_by(link: params[:link])
    end

    private

    def quote_params
      params.require(:quote).permit(:id, :description, :link)
    end
end
