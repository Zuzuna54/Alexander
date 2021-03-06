class User < ApplicationRecord
  
  attr_reader :password
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true } 
  after_initialize :ensure_session_token

  has_many :posts
  has_many :comments
  has_many :likes

  has_many :liked_posts,
  through: :likes,
  source: :post

   has_many :active_follows,  
    class_name: :Following,
    foreign_key: :user_id,
    dependent: :destroy

  has_many :passive_follows, 
    class_name: :Following,
    foreign_key: :followed_user_id,
    dependent: :destroy

  has_many :followings, 
    through: :active_follows,
    source: :following,
    dependent: :destroy

  has_many :followers, 
    through: :passive_follows, 
    source: :follower,
    dependent: :destroy

  has_one_attached :photo
 
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end
  
  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)  
  end

  def is_password?(password)
    bcrypt_pw = BCrypt::Password.new(self.password_digest)  
    bcrypt_pw.is_password?(password) 
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
   
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save! 
    self.session_token
  end

  def self.search(query)
    query = query + "%"
    users = User.where("LOWER(username) LIKE LOWER(?)", query)
    .order("users.created_at DESC")
    return users 
  end 
end


