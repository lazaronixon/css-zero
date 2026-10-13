require "test_helper"
require "generators/css_zero/authentication/authentication_generator"

class CssZero::Generators::AuthenticationGeneratorTest < Rails::Generators::TestCase
  tests CssZero::Generators::AuthenticationGenerator
  destination CSS_ZERO_TEST_APP_ROOT

  test "generates the session and password templates" do
    run_generator

    assert_file "app/views/sessions/new.html.erb" do |body|
      assert_match 'data-controller="flash"', body
    end

    assert_file "app/views/passwords/new.html.erb"
    assert_file "app/views/passwords/edit.html.erb"
  end
end
