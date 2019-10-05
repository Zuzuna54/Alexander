# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( reset.css )
Rails.application.config.assets.precompile += %w( animations.css )
Rails.application.config.assets.precompile += %w( buttons.css )
Rails.application.config.assets.precompile += %w( footer.css )
Rails.application.config.assets.precompile += %w( forms.css )
Rails.application.config.assets.precompile += %w( splash_page.css )
Rails.application.config.assets.precompile += %w( navbar.css )
Rails.application.config.assets.precompile += %w( post_box.css )
# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
