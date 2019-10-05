# json.extract! @user, :id, :username
json.set! @user.id do
    json.partial! "api/users/user", user: @user
end

@posts.each do |post|
    json.set! post.id do
        josn.partial!('/api/posts/post', post: post)
    end
end
