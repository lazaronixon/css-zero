module CssZero
  class Engine < ::Rails::Engine
    initializer "css_zero.disable_generator_stylesheets" do
      Rails.application.config.generators.stylesheets = false
    end

    config.app_generators do |g|
      g.template_engine :css_zero
    end
  end
end
