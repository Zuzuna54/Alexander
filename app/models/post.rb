class Post < ApplicationRecord
    validates :author_id, :image_url, presence: true
    belongs_to :author
    has_many :likes
    has_many :comments
end
