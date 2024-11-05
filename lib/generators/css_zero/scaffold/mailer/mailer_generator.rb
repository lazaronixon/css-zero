require "rails/generators/erb/mailer/mailer_generator"

module CssZero
  module Generators
    class MailerGenerator < Erb::Generators::MailerGenerator
      source_root File.expand_path("templates", __dir__)
      source_paths << "lib/templates/erb/mailer"
    end
  end
end
