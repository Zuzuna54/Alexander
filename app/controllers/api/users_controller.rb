class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show", status: 200
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end


    def show 
        @posts = []
        @user = User.find_by(id: params[id])
        if @user 
            @posts = @user.posts
            render :show
        else
            render json: ["User not found"], status: 404
        end
    end

    private 
    def user_params 
        params.require(:user).permit(:username, :password, :bio, :email, :full_name)
    end
end 