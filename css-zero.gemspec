# frozen_string_literal: true

require_relative "lib/css_zero/version"

Gem::Specification.new do |spec|
  spec.name     = "css-zero"
  spec.version  = CssZero::VERSION
  spec.authors  = ["Lázaro Nixon"]
  spec.email    = "lazaronixon@hotmail.com"
  spec.summary  = "An opinionated CSS starter kit for your application."
  spec.homepage = "https://github.com/lazaronixon/css-zero"
  spec.license  = "MIT"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/lazaronixon/css-zero"

  spec.files = Dir["{app,lib}/**/*", "Rakefile", "CHANGELOG", "LICENSE", "README.md"]
end
