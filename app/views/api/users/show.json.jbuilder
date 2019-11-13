# json.extract! @user, :id, :username

json.partial! "api/users/user", user: @user

json.posts do 
    if @posts
        @posts.each do |post|
            json.set! post.id do
                json.partial!('/api/posts/post', post: post)
            end 
        end 
    end
end 