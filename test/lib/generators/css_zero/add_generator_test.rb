require "test_helper"
require "generators/css_zero/add/add_generator"

class CssZero::AddGeneratorTest < Rails::Generators::TestCase
  tests CssZero::AddGenerator
  destination CSS_ZERO_TEST_APP_ROOT

  TEMPLATES = CssZero::AddGenerator.source_root
  RESOURCES = YAML.load_file(File.expand_path("../resources.yml", TEMPLATES))

  test "copies the resources of each component" do
    run_generator %w(button combobox)

    (RESOURCES["button"] + RESOURCES["combobox"]).each do |resource|
      assert_file resource, File.read(File.join(TEMPLATES, resource))
    end
  end

  test "reports invalid components" do
    output = run_generator %w(button not_a_component)

    assert_match(/invalid\s+not_a_component/, output)
    assert_file "app/assets/stylesheets/button.css"
  end

  test "every resource exists in templates" do
    RESOURCES.each do |component, resources|
      resources.each do |resource|
        assert_path_exists File.join(TEMPLATES, resource), "#{component} references missing #{resource}"
      end
    end
  end

  test "every template is referenced by a component" do
    templates = Dir.glob("**/*", base: TEMPLATES).reject do |path|
      File.directory?(File.join(TEMPLATES, path)) || File.basename(path).start_with?(".")
    end

    resources = RESOURCES.values.flatten

    unreferenced = templates.reject do |template|
      resources.any? { |resource| resource.end_with?("/") ? template.start_with?(resource) : template == resource }
    end

    assert_empty unreferenced
  end

  test "every component is listed in USAGE" do
    usage = File.read(File.expand_path("../USAGE", TEMPLATES))

    RESOURCES.each_key do |component|
      assert_match(/\b#{Regexp.escape(component)}\b/, usage, "#{component} missing from USAGE")
    end
  end
end
