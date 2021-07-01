class QuotesController < ApplicationController
    def index
        quotes = Quote.all
        render json: QuoteSerializer.new(quotes).to_serialized_json
    end
end
