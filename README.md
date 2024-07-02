# CSS Zero

An opinionated CSS starter kit for your application. You can think of it like a "no build" Tailwind CSS.

## Installation

This gem requires [Propshaft](https://github.com/rails/propshaft), make sure to load all the CSS files in your `layout.html.erb`.

```html+erb
<%= stylesheet_link_tag :all, "data-turbo-track": "reload" %>
```

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
bin/rails generate css_zero:add accordion alert alert_dialog badge button card dialog input progress switch table
```

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
.component {
  background-color: var(--red-500);
  border-radius: var(--rounded);
  block-size: var(--size-4);
}
```

Check the [CSS files](app/assets/stylesheets) in the repository to see the available variables and utility classes.

## Components

Check the [CSS files](lib/generators/css_zero/add/templates/app/assets/stylesheets) in the repository to see the source of the components.

### Accordion

<details>
<summary>Show me the code!</summary>

```html
<div class="accordion">
  <details name="my_accordion">
    <summary>Is it accessible?</summary>
    <p class="text-sm">Yes. It adheres to the WAI-ARIA design pattern.</p>
  </details>
  <details name="my_accordion">
    <summary>Is it styled?</summary>
    <p class="text-sm">Yes. It comes with default styles that matches the other components' aesthetic.</p>
  </details>
  <details name="my_accordion">
    <summary>Is it animated?</summary>
    <p class="text-sm">Yes. It's animated by default, but you can disable it if you prefer.</p>
  </details>
</div>
```
</details>

### Alert

<details>
<summary>Show me the code!</summary>

```html+erb
<div class="alert alert--negative flex items-start gap">
  <%= image_tag("circle-alert.svg", role: "presentation", size: 16) %>
  <div class="flex flex-col">
    <h1 class="font-medium leading-none mbe-1">Error</h1>
    <p class="text-sm">Your session has expired. Please log in again.</p>
  </div>
</div>
```
</details>

### Alert Dialog

<details>
<summary>Show me the code!</summary>

```html
<div>
  <dialog id="my_alert_dialog" class="alert-dialog">
    <h1 class="text-lg font-semibold">Are you absolutely sure?</h1>
    <p class="text-sm text-subtle mbs-2">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>

    <div class="flex justify-end gap-sm mbs-4">
      <form method="dialog"><button class="btn btn--outline">Cancel</button></form>
      <button class="btn btn--primary">Continue</button>
    </div>
  </dialog>

  <button class="btn" data-controller="dialog-control" data-dialog-control-target-value="my_alert_dialog" data-action="dialog-control#showModal">
    Show alert dialog
  </button>
</div>
```
</details>

### Badge

<details>
<summary>Show me the code!</summary>

```html
<div class="flex justify-start gap">
  <div class="badge">Badge</div>
  <div class="badge badge--secondary">Secondary</div>
  <div class="badge badge--outline">Outline</div>
  <div class="badge badge--negative">Negative</div>
</div>
```
</details>

### Button

<details>
<summary>Show me the code!</summary>

```html
<div class="flex flex-wrap items-center gap" aria-busy>
  <button class="btn">Primary</button>
  <button class="btn btn--secondary">Secondary</button>
  <button class="btn btn--outline">Outline</button>
  <button class="btn btn--plain">Plain</button>
  <button class="btn btn--negative">Negative</button>

  <button class="btn">
    <%= image_tag "circle-alert.svg", role: "presentation", size: 16 %>
    <span>With icon</span>
  </button>

  <button class="btn btn--loading" disabled>
    <span>Please wait</span>
  </button>
</div>
```
</details>

### Card

<details>
<summary>Show me the code!</summary>

```html
<div class="card flex flex-col gap" style="width: 350px; gap: 1.5rem;">
  <div class="flex flex-col gap-sm">
    <h1 class="text-2xl font-semibold leading-none">Create project</h1>
    <p class="text-sm text-subtle">Deploy your new project in one-click.</p>
  </div>

  <div class="flex flex-col gap">
    <div class="flex flex-col gap-sm">
      <label for="name" class="text-sm font-medium">Name</label>
      <input type="text" id="name" placeholder="Name of your project" class="input">
    </div>

    <div class="flex flex-col gap-sm">
      <label for="framework" class="text-sm font-medium">Framework</label>
      <select id="framework" class="input">
        <option value="">Select</option>
        <option value="rails">Ruby on Rails</option>
        <option value="laravel">Laravel</option>
        <option value="next">Next</option>
      </select>
    </div>
  </div>

  <div class="flex justify-between">
    <button class="btn btn--outline">Cancel</button>
    <button class="btn">Destroy</button>
  </div>
</div>
```
</details>

### Dialog

<details>
<summary>Show me the code!</summary>

```html
<div>
  <dialog id="my_dialog" class="dialog" style="max-inline-size: 430px;" popover>
    <button class="btn btn--plain p-0 dialog__close" popovertarget="my_dialog" popovertargetaction="hide">
      <%= image_tag "x.svg", aria: { hidden: "true" }, size: 16 %>
      <span class="sr-only">Close</span>
    </button>

    <div class="flex flex-col gap">
      <div>
        <h1 class="text-lg leading-none font-semibold">Edit profile</h1>
        <p class="text-sm text-subtle mbs-2">Make changes to your profile here. Click save when you're done.</p>
      </div>

      <div class="flex flex-col mb-4 gap">
        <div class="grid grid-cols-4 items-center gap">
          <label for="name" class="text-sm font-medium text-end">Name</label>
          <input type="text" id="name" value="Lázaro Nixon" class="input col-span-3">
        </div>

        <div class="grid grid-cols-4 items-center gap">
          <label for="username" class="text-sm font-medium text-end">Username</label>
          <input type="text" id="username" value="@lazaronixon" class="input col-span-3">
        </div>
      </div>

      <div class="flex items-center justify-end">
        <input type="submit" value= "Save changes" class="btn"/>
      </div>
    </div>
  </dialog>

  <button class="btn" popovertarget="my_dialog">
    Show modal
  </button>
</div>
```
</details>

### Input

<details>
<summary>Show me the code!</summary>

```html+erb
<%= form_with url: "/users", class: "flex flex-col gap" do |form| %>
  <div class="flex flex-col gap-sm">
    <%= form.label :name, class: "text-sm font-medium" %>
    <%= form.text_field :name, class: "input" %>
  </div>

  <div class="flex flex-col gap-sm">
    <%= form.label :pick_a_date, class: "text-sm font-medium" %>
    <%= form.date_field :pick_a_date, class: "input" %>
  </div>

  <div class="flex flex-col gap-sm">
    <%= form.label :age_range, class: "text-sm font-medium" %>
    <%= form.select :age_range, ["0-13", "14-17", "18-23"], {}, class: "input" %>
  </div>

  <div class="flex flex-col gap-sm">
    <%= form.label :comment, class: "text-sm font-medium" %>
    <%= form.text_area :comment, rows: 3, class: "input" %>
  </div>

  <div class="flex items-center gap-sm">
    <%= form.check_box :status, class: "checkbox" %>
    <%= form.label :status, "Send a copy to yourself", class: "text-sm font-medium" %>
  </div>
<% end %>
```
</details>

### Progress

<details>
<summary>Show me the code!</summary>

```html
<label>
  <span class="sr-only">Loading progress</span>
  <progress value="75" max="100" class="progress"></progress>
</label>
```
</details>

### Switch

<details>
<summary>Show me the code!</summary>

```html+erb
<div class="flex items-center gap-sm">
  <%= form.check_box :status, class: "switch" %>
  <%= form.label :status, "Airplane Mode", class: "text-sm font-medium" %>
</div>
```
</details>

### Table

<details>
<summary>Show me the code!</summary>

```html
<table class="table">
  <thead>
    <tr>
      <th>Invoice</th>
      <th>Status</th>
      <th>Method</th>
      <th class="text-end">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>INV001</th>
      <td>Paid</td>
      <td>Credit Card</td>
      <td class="text-end">$250.00</td>
    </tr>
    <tr>
      <th>INV002</th>
      <td>Pending</td>
      <td>PayPal</td>
      <td class="text-end">$150.00</td>
    </tr>
    <tr>
      <th>INV003</th>
      <td>Unpaid</td>
      <td>Transfer</td>
      <td class="text-end">$350.00</td>
    </tr>
    <tr>
      <th>INV004</th>
      <td>Paid</td>
      <td>Credit Card</td>
      <td class="text-end">$450.00</td>
    </tr>
  </tbody>
  <tfoot>
      <tr>
        <td colspan="3">Paid</td>
        <td class="text-end">$2,500.00</td>
      </tr>
  </tfoot>
</table>
```
</details>

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
