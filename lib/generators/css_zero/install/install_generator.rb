require "rails/generators/named_base"

class CssZero::InstallGenerator < Rails::Generators::Base
  source_root File.expand_path("templates", __dir__)

  def copy_base_css
    copy_file "app/assets/stylesheets/base.css"
  end
end
