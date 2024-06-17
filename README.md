# CSS Zero

An opinionated CSS starter kit for your application. You can think of it like a "no build" Tailwind CSS.

## Installation

```
bundle add css-zero
```

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

  ```css
  *= require _reset
  *= require animations
  *= require borders
  *= require buttons
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
  *= require zutilities
  ```
</details>

## Usage

```html
<h1 class="text-xl font-bold mb-4">
  Write most page content using utility classes.
</h1>

<div class="component">
  Write custom CSS using predefined variables for components.
</div>
```

```css
.component {
  background-color: var(--red-500);
  border-radius: var(--rounded);
  height: var(--size-4);
}
```

Check the [CSS files](app/assets/stylesheets) in the repository for reference.

## Buttons

<img width="1010" alt="buttons" src="https://github.com/lazaronixon/css-zero/assets/2651240/ec073c9d-d3b7-4a1e-8e7f-d772ff0e0cb8">

```html+erb
<div class="flex items-center gap">
  <button class="btn">Primary button</button>
  <button class="btn btn--outline">Outline button</button>
  <button class="btn btn--plain">Plain button</button>
  <button class="btn" disabled>Disabled button</button>

  <button class="btn">
    <%= image_tag "plus.svg", role: "presentation", class: "invert" %>
    <span>Icon button</span>
  </button>

  <button class="btn" style="--btn-background: #67e8f9; --btn-color: #083344;">
    Colored button
  </button>

  <button class="btn btn--small">
    Button small
  </button>
</div>
```

## Inputs

Soon...

## Dialog

<img width="633" alt="Dialog" src="https://github.com/lazaronixon/css-zero/assets/2651240/2e2db0cb-86f2-4dfd-8d5e-fbfeb9bde78d">

```html
<dialog id="my_modal" class="dialog">
  <h1 class="font-semibold mbe-2">Refund payment</h1>
  <p class="text-sm text-subtle mbe-10">The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.</p>

  <div class="flex gap justify-end">
    <form method="dialog"><button class="btn btn--plain">Cancel</button></form>
    <button class="btn btn--primary">Refund</button>
  </div>
</dialog>
```

## Customization

### Root level

```css
:root {
  --color-bg: white;
  --color-text: var(--zinc-950);
  --color-text-reversed: white;
  --color-text-subtle: var(--zinc-500);
  --color-border: var(--zinc-200);
}
```

### Class level

```css
.btn--colored {
  --btn-background: var(--cyan-500);
  --btn-color: var(--cyan-950);
}
```

### Style level

```html
<button class="btn btn--primary" style="--btn-background: #67e8f9; --btn-color: #083344;">
  Colored button
</button>
```

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
