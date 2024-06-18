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
  *= require base
  *= require borders
  *= require buttons
  *= require colors
  *= require dialog
  *= require effects
  *= require filters
  *= require grid
  *= require inputs
  *= require separators
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

## Inputs

```html+erb
<div class="flex flex-col w-full gap" style="max-inline-size: 24rem;">
  <div class="flex flex-col grow gap-small">
    <label for="name_field" class="text-sm font-medium">Full name</label>
    <input type="text" id="name_field" class="input">
  </div>

  <div class="flex flex-col grow gap-small">
    <label for="file_field" class="text-sm font-medium">File</label>
    <input type="file" id="file_field" class="input">
  </div>

  <div class="flex flex-col grow gap-small">
    <label for="age_range_Field" class="text-sm font-medium">Age Range</label>
    <select id="age_range_Field" class="input">
      <option value="0-13">0-13</option>
      <option value="14-17">14-17</option>
    </select>
  </div>

  <div class="flex flex-col grow gap-small">
    <label for="comment_field" class="text-sm font-medium">Comment</label>
    <textarea id="comment_field" class="input"></textarea>
  </div>

  <div class="flex items-center gap-small">
    <input type="checkbox" id="terms">
    <label for="terms" class="text-sm font-medium">Accept terms and conditions</label>
  </div>
</div>
```

## Buttons

<img width="779" alt="Buttons" src="https://github.com/lazaronixon/css-zero/assets/2651240/ea0bdafe-7bd9-46a4-a87c-b11dd0836707">

```html+erb
<div class="flex items-center gap">
  <button class="btn">Primary button</button>
  <button class="btn btn--outline">Outline button</button>
  <button class="btn btn--plain">Plain button</button>

  <button class="btn">
    <%= image_tag "plus.svg", role: "presentation", size: 20 %>
    <span>Icon button</span>
  </button>

  <button class="btn" style="--btn-background: #67e8f9; --btn-color: #083344;">
    Custom button
  </button>
</div>
```

## Dialog

<img width="572" alt="Dialog" src="https://github.com/lazaronixon/css-zero/assets/2651240/381dd7eb-8024-4ffc-992a-d47d370a3c24">

```html+erb
<dialog id="my_modal" class="dialog">
  <h1 class="text-lg font-semibold">Are you absolutely sure?</h1>
  <p class="text-sm text-subtle mbs-2">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>

  <div class="flex gap-small justify-end mbs-4">
    <form method="dialog"><button class="btn btn--outline">Cancel</button></form>
    <button class="btn btn--primary">Continue</button>
  </div>
</dialog>

<button class="btn" onClick="my_modal.showModal();">Show modal</button>
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
