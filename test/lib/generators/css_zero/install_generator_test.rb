require "test_helper"
require "generators/css_zero/install/install_generator"

class CssZero::InstallGeneratorTest < Rails::Generators::TestCase
  tests CssZero::InstallGenerator
  destination CSS_ZERO_TEST_APP_ROOT

  test "copies base.css" do
    run_generator

    assert_file "app/assets/stylesheets/base.css"
  end

  test "generates the application layout" do
    run_generator

    assert_file "app/views/layouts/application.html.erb" do |layout|
      assert_match %(<meta name="application-name" content="Dummy App">), layout
      assert_match %r{
        stylesheet_link_tag\ "css-zero/reset".*
        stylesheet_link_tag\ "css-zero/variables".*
        stylesheet_link_tag\ :app,.*
        stylesheet_link_tag\ "css-zero/utilities"
      }mx, layout
      assert_match %(<body class="header-layout">), layout
      assert_match %(<h1 class="font-bold text-2xl">Dummy App</h1>), layout
    end
  end

  test "uses importmap tags when importmaps are configured" do
    FileUtils.mkdir_p File.join(destination_root, "config")
    FileUtils.touch File.join(destination_root, "config/importmap.rb")

    run_generator

    assert_file "app/views/layouts/application.html.erb" do |layout|
      assert_match "<%= javascript_importmap_tags %>", layout
      assert_no_match "javascript_include_tag", layout
    end
  end

  test "uses javascript include tag without importmaps" do
    run_generator

    assert_file "app/views/layouts/application.html.erb" do |layout|
      assert_match %(<%= javascript_include_tag "application", "data-turbo-track": "reload", type: "module" %>), layout
      assert_no_match "javascript_importmap_tags", layout
    end
  end

  test "overwrites an existing application layout" do
    FileUtils.mkdir_p File.join(destination_root, "app/views/layouts")
    File.write File.join(destination_root, "app/views/layouts/application.html.erb"), "existing layout"

    run_generator

    assert_file "app/views/layouts/application.html.erb" do |layout|
      assert_no_match "existing layout", layout
      assert_match "css-zero/reset", layout
    end
  end

  test "adds the basic components" do
    run_generator

    %w(
      app/assets/stylesheets/layouts.css
      app/assets/stylesheets/flash.css
      app/javascript/controllers/flash_controller.js
      app/assets/stylesheets/alert.css
      app/assets/stylesheets/input.css
      app/assets/stylesheets/button.css
    ).each { |file| assert_file file }
  end
end
