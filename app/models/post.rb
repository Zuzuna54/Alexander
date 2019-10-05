class Post < ApplicationRecord
    validates :author_id, :image_url, presence: true

    # belongs_to :user,
    # foreign_key: :author_id

    # has_many :likes
    # has_many :comments
end
