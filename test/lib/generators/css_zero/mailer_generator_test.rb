require "test_helper"
require "rails/generators/mailer/mailer_generator"
require "generators/css_zero/mailer/mailer_generator"

class CssZero::Generators::MailerGeneratorTest < Rails::Generators::TestCase
  tests CssZero::Generators::MailerGenerator
  destination CSS_ZERO_TEST_APP_ROOT

  arguments %w(Notifications invoice)

  test "generates correct mailer view templates" do
    run_generator

    assert_file "app/views/notifications_mailer/invoice.html.erb" do |view|
      assert_match %r(app/views/notifications_mailer/invoice\.html\.erb), view
      assert_match(/\= @greeting/, view)
    end

    assert_file "app/views/notifications_mailer/invoice.text.erb" do |view|
      assert_match %r(app/views/notifications_mailer/invoice\.text\.erb), view
      assert_match(/\= @greeting/, view)
    end

    assert_file "app/views/layouts/mailer.text.erb" do |view|
      assert_match("<%= yield %>", view)
    end

    assert_file "app/views/layouts/mailer.html.erb" do |view|
      assert_match("<%= yield %>", view)
    end
  end

  test "generates correct mailer view templates with namespace" do
    run_generator ["admin/notifications", "invoice"]

    assert_file "app/views/admin/notifications_mailer/invoice.html.erb" do |view|
      assert_match %r(app/views/admin/notifications_mailer/invoice\.html\.erb), view
      assert_match(/\= @greeting/, view)
    end

    assert_file "app/views/admin/notifications_mailer/invoice.text.erb" do |view|
      assert_match %r(app/views/admin/notifications_mailer/invoice\.text\.erb), view
      assert_match(/\= @greeting/, view)
    end

    assert_file "app/views/layouts/admin/mailer.text.erb" do |view|
      assert_match("<%= yield %>", view)
    end

    assert_file "app/views/layouts/admin/mailer.html.erb" do |view|
      assert_match("<%= yield %>", view)
    end
  end

  test "overriding generator templates in lib/templates/erb/mailer" do
    override_dir = File.join(destination_root, "lib/templates/erb/mailer")
    FileUtils.mkdir_p override_dir
    File.open(File.join(override_dir, "view.html.erb"), "w") { |f| f.puts "This is a custom template" }
    File.open(File.join(override_dir, "layout.html.erb"), "w") { |f| f.puts "This is a custom layout" }

    # change directory because the generator adds a relative path to source_paths
    Dir.chdir(destination_root) do
      run_generator
    end

    assert_file "app/views/notifications_mailer/invoice.html.erb" do |view|
      assert_match("This is a custom template", view)
    end

    assert_file "app/views/layouts/mailer.html.erb" do |view|
      assert_match("This is a custom layout", view)
    end
  end
end
