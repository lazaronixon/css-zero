# CSS Zero

An opinionated CSS starter kit for your Ruby on Rails application. You can think of it like a "no build" Tailwind CSS.

## Installation

Add this gem to your project.

```
bundle add css-zero
```

Add the base.css file to your application.

```
bin/rails generate css_zero:install
```

Add only the components you need. (Optional)

```
bin/rails generate css_zero:add accordion alert avatar badge breadcrumb button card carousel collapsible dialog flash input pagination progress prose sheet skeleton switch table toggle
```

### Requirements

If you are using [Propshaft](https://github.com/rails/propshaft) (recommended) make sure to load all the CSS files in your layout.html.erb.

<details>
  <summary>Click here to see how</summary>

```html+erb
<%= stylesheet_link_tag :all, "data-turbo-track": "reload" %>
```
</details>

If you are using [Sprockets](https://github.com/rails/sprockets) make sure to load all the CSS files in your application.css.

<details>
  <summary>Click here to see how</summary>

```
/*
*= require _reset
*= require animations
*= require borders
*= require colors
*= require effects
*= require filters
*= require grid
*= require sizes
*= require transform
*= require transition
*= require typography
*= require_tree .
*= require_self
*= require zindex
*= require zutilities
*/
```
</details>

Some icons in the examples are not copied to the project. If you are looking for good ones, I recommend [Lucide](https://lucide.dev).

## Usage

```html
<h1 class="text-xl font-bold mb-4">
  Write most page content using utility classes.
</h1>

<div class="custom-component">
  Create components using CSS variables.
</div>

<div class="card">
  Optionally, copy pre-built components into your application.
</div>
```

```css
.custom-component {
  background-color: var(--red-500);
  border-radius: var(--rounded);
  block-size: var(--size-4);
}
```

Check the [CSS files](app/assets/stylesheets) in the repository to see the available variables and utility classes.

## Components

[<img src="https://github.com/user-attachments/assets/989b0ddd-064a-4ac6-8aee-f9eaaf07ff38">](https://css-zero-showcase.onrender.com/lookbook)

More components soon...

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
