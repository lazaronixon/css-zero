require "rails/generators/named_base"

class CssZero::AddGenerator < Rails::Generators::Base
  source_root File.expand_path("templates", __dir__)

  argument :components, type: :array, banner: "[components]"

  def add_components
    components.each { |component| copy_resources_for(component) }
  end

  private
    def copy_resources_for(component)
      if resources.has_key?(component)
        copy_resources(resources, component)
      else
        say_status :invalid, component, :red
      end
    end

    def copy_resources(resources, component)
      resources[component].each do |resource|
        resource.end_with?('/') ? directory(resource) : copy_file(resource)
      end
    end

    def resources
      @resources ||= YAML.load_file(resources_path)
    end

    def resources_path
      File.expand_path "resources.yml", __dir__
    end
end
