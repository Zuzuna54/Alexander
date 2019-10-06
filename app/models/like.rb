class Like < ApplicationRecord
    validates :post_id, :user_id, presence: true
    validates :post_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :post
end
