# CSS Zero

An opinionated CSS starter kit for your application. You can think of it like a "no build" Tailwind CSS.

## Installation

```
bundle add css-zero
```

This gem requires [propshaft](https://github.com/rails/propshaft) as the asset pipeline.

## Usage

```html
<h1 class="text-xl font-bold mb-md">
  Write most page content using utility classes. Use what is available or add more when needed.
</h1>

<div class="component">
  Write custom CSS using predefined variables for more complex stuff.
</div>
```

```css
.component {
  background-color: var(--red-500);
  border-radius: var(--rounded);
  height: var(--size-4);
}
```

## Buttons

<img width="302" alt="Buttons Light" src="https://github.com/lazaronixon/css-zero/assets/2651240/424164a4-bb55-437e-a310-1ce091e7dd81">
<img width="302" alt="Button Dark" src="https://github.com/lazaronixon/css-zero/assets/2651240/1a6125ac-3137-4024-8619-551752ae4b0d">

```html+erb
<div class="flex flex-col items-center gap">
  <button class="btn">Primary button</button>
  <button class="btn btn--plain">Plain button</button>
  <button class="btn btn--outline">Outline button</button>
  <button class="btn" disabled>Disabled button</button>

  <button class="btn">
    <%= image_tag "plus-white.svg" %> <span>Icon Button</span>
  </button>

  <button class="btn" style="--btn-background: var(--cyan-300); --btn-color: var(--cyan-950);">
    Colored button
  </button>

  <button class="btn btn--small">
    Button small
  </button>
</div>
```

## Reference

- [Animations](app/assets/stylesheets/animations.css)
- [Border](app/assets/stylesheets/borders.css)
- [Buttons](app/assets/stylesheets/buttons.css)
- [Colors](app/assets/stylesheets/colors.css)
- [Effects](app/assets/stylesheets/effects.css)
- [Filters](app/assets/stylesheets/filters.css)
- [Grid](app/assets/stylesheets/grid.css)
- [Sizes](app/assets/stylesheets/sizes.css)
- [Transform](app/assets/stylesheets/transform.css)
- [Transition](app/assets/stylesheets/transition.css)
- [Typography](app/assets/stylesheets/typography.css)
- [Utilities](app/assets/stylesheets/zutilities.css)

## Customization

Global level

```css
:root {
  --color-bg: white;
  --color-bg-surface: var(--zinc-100);
  --color-text: var(--zinc-950);
  --color-text-reversed: white;
  --color-text-subtle: var(--zinc-500);
  --color-border: var(--zinc-200);
}
```

Component level

```css
.btn--colored {
  --btn-background: var(--cyan-500);
  --btn-color: var(--cyan-950);
}
```

Style level

```html
<div class="flex flex-column w-full gap" style="--row-gap: 0.5rem">
  More HTML tags here...
</div>
```

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
