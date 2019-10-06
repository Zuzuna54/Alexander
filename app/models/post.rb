class Post < ApplicationRecord
    validates :user_id, :image_url, presence: true

    belongs_to :user
    
    has_many :likes
    has_many :comments
    
    has_many :likers, 
    through: :likes,
    source: :user
end
