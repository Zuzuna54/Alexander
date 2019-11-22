json.extract! user, :id, :username, :email, :bio, :full_name
json.postIds user.post_ids
json.followerIds user.followers.pluck(:id)
json.followingIds user.followings.pluck(:id)
if user.photo.attached?
    json.profilePhoto url_for(user.photo)
end