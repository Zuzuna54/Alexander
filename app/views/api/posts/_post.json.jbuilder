# json.merge! post.attributes
json.extract!(post, :id, :user_id, :location, :caption, :updated_at, :created_at, :comment_ids, :like_ids, :liker_ids )
json.photoUrl url_for(post.photo)
# json.id :id
# json.user_id :user_id
# json.location :location
# json.caption  :caption
# json.updated_at  :updated_at
# json.created_at  :created_at
# json.comment_ids  
# json.like_ids 
