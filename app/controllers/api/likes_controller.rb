class Api::LikesController < ApplicationController
    before_action :ensure_logged_in

    def create
        @like = Like.new(likes_parmas)
        @like.user_id = current_user.id
        if @like.save
            render :show, status: 200
        else
            render json: @like.errors.full_messages, status: 418
        end
    end

    def destroy
        @like = Like.find_by(id: parmas[:id])
        if @like && @like.user_id == current_user.id 
            @like.destroy
            render json: {}, status: 200 
        else
            render json: ['nope cant do that'], status: 422
        end
    end

    

    private

    def likes_parmas
        params.require(:like).permit(:post_id)
    end


end
