module CssZero
  class Engine < ::Rails::Engine
    config.app_generators do |g|
      g.template_engine :css_zero
    end
  end
end
