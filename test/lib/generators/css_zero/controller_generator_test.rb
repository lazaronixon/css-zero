require "test_helper"
require "generators/css_zero/controller/controller_generator"

class CssZero::Generators::ControllerGeneratorTest < Rails::Generators::TestCase
  tests CssZero::Generators::ControllerGenerator
  destination CSS_ZERO_TEST_APP_ROOT

  arguments %w(Messages index show)

  test "generates correct view templates" do
    run_generator

    ["index", "show"].each do |view|
      assert_file "app/views/messages/#{view}.html.erb" do |body|
        assert_match %(<h1 class="font-bold text-4xl">Messages##{view}</h1>), body
      end
    end
  end

  test "generates correct view templates when namespaced" do
    run_generator ["admin/messages", "index", "show"]

    ["index", "show"].each do |view|
      assert_file "app/views/admin/messages/#{view}.html.erb"
    end
  end

  test "overriding generator templates in lib/templates/erb/controller" do
    override_dir = File.join(destination_root, "lib/templates/erb/controller")
    FileUtils.mkdir_p override_dir
    File.open(File.join(override_dir, "view.html.erb"), "w") { |f| f.puts "This is a custom template" }

    # change directory because the generator adds a relative path to source_paths
    Dir.chdir(destination_root) do
      run_generator
    end

    ["index", "show"].each do |view|
      assert_file "app/views/messages/#{view}.html.erb" do |body|
        assert_match("This is a custom template", body, "#{view} custom template should be used")
      end
    end
  end
end
