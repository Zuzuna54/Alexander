json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial!('post', post: post)
        end 
    end 
end 

# json.users do 
#     @users.each do |user|
#         json.set! user.id do 
#             json.partial!('/api/users/user', user: user)
#         end 
#     end 
# end 