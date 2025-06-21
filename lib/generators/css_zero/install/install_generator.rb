require "rails/generators/named_base"

class CssZero::InstallGenerator < Rails::Generators::Base
  include Rails::Generators::AppName

  source_root File.expand_path("templates", __dir__)

  def copy_base_css
    copy_file "app/assets/stylesheets/base.css"
  end

  def copy_application_layout
    template "app/views/layouts/application.html.erb", force: true
  end

  def add_basic_components
    invoke "css_zero:add", %w(layouts flash alert input button icons)
  end

  private

  def importmaps?
    Rails.root.join("config/importmap.rb").exist?
  end
end
