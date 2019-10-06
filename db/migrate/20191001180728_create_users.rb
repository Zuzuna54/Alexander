class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :passwrod_digest, null: false 
      t.string :session_token, null: false
      t.string :bio
      t.string :full_name
      t.timestamps
    end
    
  
  end
end
