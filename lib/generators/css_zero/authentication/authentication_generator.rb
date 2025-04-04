require "rails/generators/erb/authentication/authentication_generator"

module CssZero
  module Generators
    class AuthenticationGenerator < Erb::Generators::AuthenticationGenerator
      source_root File.expand_path("templates", __dir__)
    end
  end
end