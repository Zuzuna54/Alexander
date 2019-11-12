class Api::PostsController < ApplicationController
    before_action :ensure_logged_in
    
    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render :show, status: 200 
        else 
            render json: ['missing required field'], status: 422
        end     
    end

    def show
        @post = Post.find_by(id: params[:id])
        if @post 
            render :show, status: 200 
        else 
            render json: ["Post not found"], status: 404 
        end 
    end 

    def index
        @posts = Post.all
        @comments = []
        @users = []
        @likes =[] 
        @posts.each do |post|
            if !@users.include?(post.user)
                @users << post.user 
            end
            post.comments.each do |comment|
                @comments << comment 
            end 
            post.likes.each do |like|
                @likes << like
            end 
        end 
        
        render :index, status: 200 
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post && @post.update(post_params) && @post.user_id == current_user.id
            @post.save
            render :show, status: 200
        else 
            render json: ['missing required field'], status: 422
        end 
    end 

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post && @post.user_id == current_user.id && @post.destroy 
            render json: {}, status: 200
        else 
            render json: ['Post not found'], status: 404
        end 
    end 

    

    private 
    def post_params 
        params.require(:post).permit(:location, :photo, :caption)
    end
end