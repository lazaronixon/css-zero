# CSS Zero

An opinionated CSS starter kit for your application. You can think of it like a "no build" Tailwind CSS.

## Installation

```
bundle add css-zero
```

If you are using [Propshaft](https://github.com/rails/propshaft) (recommended) make sure to load all the CSS files in your layout.html.erb.

<details>
<summary>Code</summary>

```html+erb
<%= stylesheet_link_tag :all, "data-turbo-track": "reload" %>
```
</details>

If you are using [Sprockets](https://github.com/rails/sprockets) make sure to load all the CSS files in your application.css.

<details>
<summary>Code</summary>

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
  block-size: var(--size-4);
}
```

Check the [CSS files](app/assets/stylesheets) in the repository for reference.

## Buttons

<img width="783" alt="Buttons" src="https://github.com/lazaronixon/css-zero/assets/2651240/4e6a6829-5dd0-4eff-9b2f-33c9de85d3ef">

<details>
<summary>Code</summary>

```html+erb
<div class="flex justify-center gap">
  <button class="btn">Primary</button>
  <button class="btn btn--secondary">Secondary</button>
  <button class="btn btn--outline">Outline</button>
  <button class="btn btn--plain">Plain</button>
  <button class="btn btn--positive">Positive</button>
  <button class="btn btn--negative">Negative</button>

  <button class="btn">
    <%= image_tag "plus.svg", role: "presentation", size: 20 %>
    <span>With icon</span>
  </button>
</div>
```
</details>

## Inputs

<img width="406" alt="Inputs" src="https://github.com/lazaronixon/css-zero/assets/2651240/0fe075cb-a942-48d7-91e0-525f6f0d2614">

<details>
<summary>Code</summary>

```html
<form method="post" class="flex flex-col w-full gap" style="max-inline-size: 24rem;">
  <div class="flex flex-col grow gap-small">
    <label for="name_field" class="text-sm font-medium">Full name</label>
    <input type="text" id="name_field" class="input" minlength="2" required>
  </div>

  <div class="flex flex-col gap-small">
    <label for="date_field" class="text-sm font-medium">Date picker</label>
    <input type="date" id="date_field" class="input">
  </div>

  <div class="flex flex-col gap-small">
    <label for="file_field" class="text-sm font-medium">File</label>
    <input type="file" id="file_field" class="input">
  </div>

  <div class="flex flex-col gap-small">
    <label for="age_range_field" class="text-sm font-medium">Age Range</label>
    <select id="age_range_field" class="input">
      <option value="0-13">0-13</option>
      <option value="14-17">14-17</option>
    </select>
  </div>

  <div class="flex flex-col gap-small">
    <label for="comment_field" class="text-sm font-medium">Comment</label>
    <textarea id="comment_field" rows="3" class="input"></textarea>
  </div>

  <div class="flex items-center gap-small">
    <input type="checkbox" class="checkbox" id="terms">
    <label for="terms" class="text-sm font-medium">Accept terms and conditions</label>
  </div>
</form>
```
</details>

## Switch

<img width="168" alt="Switch" src="https://github.com/lazaronixon/css-zero/assets/2651240/46e8e762-6856-4be1-8948-9aa595d19c8b">

<details>
<summary>Code</summary>

```html
<div class="flex items-center gap-small">
  <label for="terms_field" class="switch" style="">
    <input type="checkbox" id="terms_field" class="switch__input">
    <span class="switch__btn"></span>
  </label>
  <span class="text-sm font-medium">Airplane Mode</span>
</div>
```
</details>

## Table

<img width="750" alt="Table" src="https://github.com/lazaronixon/css-zero/assets/2651240/723c1197-dc43-4023-aa73-e213efceafa8">

<details>
<summary>Code</summary>

```html
<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Access</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="font-medium">Leslie Alexander</td>
      <td>leslie.alexander@example.com</td>
      <td class="text-subtle">Admin</td>
    </tr>
    <tr>
      <td class="font-medium">Michael Foster</td>
      <td>michael.foster@example.com</td>
      <td class="text-subtle">Owner</td>
    </tr>
    <tr>
      <td class="font-medium">Dries Vincent</td>
      <td>dries.vincent@example.com</td>
      <td class="text-subtle">Member</td>
    </tr>
  </tbody>
</table>
```
</details>

## Dialog

<img width="400" alt="image" src="https://github.com/lazaronixon/css-zero/assets/2651240/923df0e7-7824-44be-8164-dc2175576a13">

<details>
<summary>Code</summary>

```html
<button class="btn" onclick="my_modal.showModal();">Show modal</button>

<dialog id="my_modal" class="dialog">
  <h1 class="text-lg font-semibold">Are you absolutely sure?</h1>
  <p class="text-sm text-subtle mbs-2">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>

  <div class="flex gap-small justify-end mbs-4">
    <form method="dialog"><button class="btn btn--outline">Cancel</button></form>
    <button class="btn">Continue</button>
  </div>
</dialog>
```
</details>

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
<button class="btn" style="--btn-background: #67e8f9; --btn-color: #083344;">
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
