require "rails/generators/named_base"

class CssZero::InstallGenerator < Rails::Generators::Base
  source_root File.expand_path("templates", __dir__)

  def copy_base_css
    copy_file "app/assets/stylesheets/base.css"
  end

  def copy_javascript_helpers
    directory "app/javascript/helpers"
  end

  def pin_javascript_helpers
    return unless install_with_importmap?
    append_to_file "config/importmap.rb", %(pin_all_from "app/javascript/helpers", under: "helpers"\n)
  end

  private
    def install_with_importmap?
      Rails.root.join("config/importmap.rb").exist?
    end
end
