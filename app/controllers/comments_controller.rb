class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments
    end

    def new
        comment = Comment.new
        render json: comment
    end

    def create
        quote = Quote.find_by(id: params[:quote_id])
        comment = Comment.new(comment_params)

        if comment.save
            session[:user_id] = comment
            puts comment
            render json: comment
        else
            render :new
        end
    end

    private

    def comment_params
        # params.require(:comment).permit(:description, :user_id, :quote_id)
        params.require(:comment).permit(:description, :quote_id)
    end
end
