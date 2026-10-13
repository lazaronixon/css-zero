# Configure Rails Environment
ENV["RAILS_ENV"] = "test"

require "rails"
require "rails/test_help"
require "rails/generators/test_case"
require "debug"

require "rails/test_unit/reporter"
Rails::TestUnitReporter.executable = "bin/test"

CSS_ZERO_TEST_TMPDIR = Dir.mktmpdir
CSS_ZERO_TEST_APP_ROOT = File.join(CSS_ZERO_TEST_TMPDIR, "dummy_app")
Minitest.after_run { FileUtils.rm_rf(CSS_ZERO_TEST_TMPDIR) }

class Rails::Generators::TestCase
  setup :prepare_destination
  teardown { FileUtils.rm_rf(destination_root) }
end

require_relative "../lib/css-zero"
