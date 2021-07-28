class CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
    end

    def new
        @comment = Comment.new
        render json: @comment
    end

    def create
        @quote = Quote.find_by(id: params[:quote_id])
        @comment = Comment.new(comment_params)

        @comment.save
        render json: @comment.to_json(:only => [:description, :quote_id])
    end

    private

    def comment_params
        params.require(:comment).permit(:description, :quote_id, :user_id)
    end
end
