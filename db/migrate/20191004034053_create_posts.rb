class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.string :location
      t.string :image_url, null: false
      t.text :caption
      t.timestamps
    end
    add_index :posts, :author_id, unique: true
  end
end
