class ChangePosts < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :author_id
    add_index :posts, :author_id
  end
end
