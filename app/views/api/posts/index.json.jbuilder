json.AllPosts do 
    if @posts
        @posts.reverse.each do |post|
            json.set! post.id do
                json.partial!('post', post: post)
            end
        end 
    end
end 

json.users do 
    if @users
        @users.each do |user|
            json.set! user.id do 
                json.partial!('/api/users/user', user: user)
            end 
        end 
    end
end 

json.likes do 
    if @likes
        @likes.each do |like|
            json.set! like.id do 
                json.partial!('/api/likes/likes', like: like)
            end
        end 
    end
end

json.comments do 
    if @comments
        @comments.each do |comment|
            json.set! comment.id do
                json.partial!('/api/comments/comment',comment: comment)
            end 
        end 
    end
end 