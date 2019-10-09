class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/posts/index", status: 200
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
        @users = User.all
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

    def search 
        @users = User.search(params[:username])
        if @users.any? 
            render :search, status: 200
        else 
            render json: {users: { none: '404'}}, status: 200
        end 
    end 

    private 
    def user_params 
        params.require(:user).permit(:username, :password, :bio, :email, :full_name)
    end
end 