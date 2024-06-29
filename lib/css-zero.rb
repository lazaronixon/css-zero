# frozen_string_literal: true

require_relative "css_zero/version"

module CssZero
  class Engine < ::Rails::Engine
    initializer "css-zero.importmap", before: "importmap" do |app|
      app.config.importmap.paths << Engine.root.join("config/importmap.rb")
    end
  end
end
