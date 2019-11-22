class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            # login!(@user)
            render "api/users/show", status: 200
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
        @users = User.all
    end

    def update
        @user = current_user
        if @user.update(user_params)
        render :show
        else
        render json: @user.errors.full_messages, status: 422
        end
    end


    def show 
        @posts = []
        @user = User.find_by(id: params[:id])
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
        params.require(:user).permit(:username, :password, :photo, :bio, :email, :full_name)
    end
end 