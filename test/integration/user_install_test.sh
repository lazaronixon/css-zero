#! /usr/bin/env bash
# reproduce the documented user journey for installing and using css-zero
# this is run in the CI pipeline, non-zero exit code indicates a failure

set -o pipefail
set -eux

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
WORKDIR="$ROOT/tmp/integration-user-install"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"
pushd "$WORKDIR"

gem install rails --conservative --no-document

# do our work in a directory with spaces in the name
mkdir "My Workspace"
pushd "My Workspace"

rails new test-install --skip-kamal --skip-thruster --skip-rubocop --skip-brakeman \
  --skip-ci --skip-docker --skip-solid --skip-system-test --skip-action-cable
pushd test-install

# use the css-zero under test
bundle add css-zero --path="$ROOT"
bundle show --paths | grep -F css-zero

# TEST: css-zero was installed correctly
bin/rails generate css_zero:install
grep -q "css-zero/reset" app/views/layouts/application.html.erb
grep -q "<body class=\"header-layout\">" app/views/layouts/application.html.erb
grep -q "javascript_importmap_tags" app/views/layouts/application.html.erb
test -e app/assets/stylesheets/base.css
test -e app/assets/stylesheets/button.css

# TEST: components are added
bin/rails generate css_zero:add dialog
test -e app/assets/stylesheets/dialog.css

# TEST: scaffold uses css-zero templates
bin/rails generate scaffold post title:string body:text published:boolean
grep -q "btn btn--primary" app/views/posts/index.html.erb

# TEST: the app renders with css-zero stylesheets
bin/rails db:prepare
bin/rails runner '
  session = ActionDispatch::Integration::Session.new(Rails.application)
  session.host! "localhost"
  session.get "/posts/new"

  raise "expected 200, got #{session.response.status}" unless session.response.status == 200

  %w[ css-zero/reset css-zero/variables css-zero/utilities button ].each do |stylesheet|
    raise "missing #{stylesheet} stylesheet" unless session.response.body.match?(%r{<link rel="stylesheet" href="/assets/#{stylesheet}-\h+\.css"})
  end
'

# TEST: authentication uses css-zero templates
bin/rails generate authentication
grep -q "data-controller=\"flash\"" app/views/sessions/new.html.erb

echo "OK"
