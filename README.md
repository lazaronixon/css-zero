# CSS Zero

An opinionated CSS starter kit for your application. You can think of it like a "no build" Tailwind CSS.

## Installation

```
bundle add css-zero
```

This gem requires [propshaft](https://github.com/rails/propshaft) as the asset pipeline.

## Usage

```css
.component {
  background-color: var(--red-500);  
  border-radius: var(--rounded);
  height: var(--size-4);

  @media (min-width: 48rem) {
    display: none;
  }
}
```

```html
  <div class="component mbe-md">
    <p>content here...</p>
  </div>
```

## Files

- [Sizes](app/assets/stylesheets/sizes.css)
- [Colors](app/assets/stylesheets/colors.css)
- [Border](app/assets/stylesheets/borders.css)
- [Typography](app/assets/stylesheets/typography.css)
- [Effects](app/assets/stylesheets/effects.css)
- [Grid](app/assets/stylesheets/grid.css)
- [Filters](app/assets/stylesheets/filters.css)
- [Transform](app/assets/stylesheets/transform.css)
- [Transition](app/assets/stylesheets/transition.css)
- [Utilities](app/assets/stylesheets/zutilities.css)

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
