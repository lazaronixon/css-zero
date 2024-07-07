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
bin/rails generate css_zero:add accordion alert avatar badge breadcrumb button card collapsible dialog input progress switch table
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

### Accordion

<img width="500" alt="accordion" src="https://github.com/lazaronixon/css-zero/assets/2651240/9644edec-9bb1-4e1f-b2da-19c7fb5a540f">

<details>
<summary>Show me the code</summary>

```html+erb
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

<img width="500" alt="alert" src="https://github.com/lazaronixon/css-zero/assets/2651240/eae5c6dd-f6b4-4c01-bec1-cd7e9523d0a6">

<details>
<summary>Show me the code</summary>

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

### Avatar

<img width="108" alt="Screenshot 2024-07-06 at 02 17 39" src="https://github.com/lazaronixon/css-zero/assets/2651240/5b3484e8-3b58-4de6-bbb5-edf52b04b8a1">

<details>
<summary>Show me the code</summary>

```html+erb
<div class="flex item-center gap">
  <div class="avatar">
    <%= image_tag "cartoon.jpg", role: "presentation", size: 48 %>
  </div>

  <div class="avatar">
    <span class="avatar__fallback">CN</span>
  </div>
</div>
```
</details>

### Badge

<img width="400" alt="image" src="https://github.com/lazaronixon/css-zero/assets/2651240/3b9d494e-1b01-472c-bf71-6391db828fe6">

<details>
<summary>Show me the code</summary>

```html+erb
<div class="flex justify-start gap">
  <div class="badge">Badge</div>
  <div class="badge badge--secondary">Secondary</div>
  <div class="badge badge--outline">Outline</div>
  <div class="badge badge--positive">Positive</div>
  <div class="badge badge--negative">Negative</div>
</div>
```
</details>

### Breadcrumb

<img width="309" alt="breadcrumb" src="https://github.com/lazaronixon/css-zero/assets/2651240/1eb53bbd-b8ac-47a5-9d2a-3a8e3f20eb9a">

<details>
<summary>Show me the code</summary>

```html+erb
<nav aria-label="breadcrumb" class="breadcrumb">
  <a href="#">Home</a>
  <%= image_tag "chevron-right.svg", role: "presentation", aria: { hidden: true }, size: 24 %>
  <a href="#">Components</a>
  <%= image_tag "chevron-right.svg", role: "presentation", aria: { hidden: true }, size: 24 %>
  <a role="link" aria-disabled="true" aria-current="page" class="text-primary">Breadcrumb</a>
</nav>
```
</details>

### Button

<img width="500" alt="button" src="https://github.com/lazaronixon/css-zero/assets/2651240/df78c11e-9167-4fd3-a779-24729cb24715">

<details>
<summary>Show me the code</summary>

```html+erb
<div class="flex flex-wrap items-center gap" aria-busy>
  <button class="btn">Primary</button>
  <button class="btn btn--secondary">Secondary</button>
  <button class="btn btn--outline">Outline</button>
  <button class="btn btn--plain">Plain</button>
  <button class="btn btn--positive">Positive</button>
  <button class="btn btn--negative">Negative</button>

  <button class="btn">
    <%= image_tag "circle-plus.svg", role: "presentation", size: 16 %>
    <span>With icon</span>
  </button>

  <button class="btn btn--loading" disabled>
    <span>Please wait</span>
  </button>
</div>
```
</details>

### Card

<img width="366" alt="image" src="https://github.com/lazaronixon/css-zero/assets/2651240/f4077b91-2d0c-49db-9fb6-2955f8575217">

<details>
<summary>Show me the code</summary>

```html+erb
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

### Collapsible

<img width="374" alt="Screenshot 2024-07-06 at 02 20 17" src="https://github.com/lazaronixon/css-zero/assets/2651240/6076d261-c392-4d08-a98d-af4b58e84fa8">

<details>
<summary>Show me the code</summary>

```html+erb
<div data-controller="collapsible" style="max-inline-size: 350px">
  <div class="flex items-center justify-between gap pi-4 pb-3">
    <h4 class="text-sm font-semibold">
      @lazaronixon starred 3 repositories
    </h4>
    <button data-action="collapsible#toggle" class="btn btn--plain p-0">
      <%= image_tag "chevrons-up-down.svg", size: 16 %>
      <span class="sr-only">Toggle</span>
    </button>
  </div>
  <div class="rounded-md border pi-4 pb-3 mbs-2 text-sm">
    @rails/rails
  </div>
  <details>
    <summary data-collapsible-target="summary" hidden></summary>
    <div class="rounded-md border pi-4 pb-3 mbs-2 text-sm">
      @rails/jbuilder
    </div>
    <div class="rounded-md border pi-4 pb-3 mbs-2 text-sm">
      @rails/jsbundling-rails
    </div>
  </details>
</div>
```
</details>

### Dialog

#### Alert Dialog

<img width="500" alt="alert_dialog" src="https://github.com/lazaronixon/css-zero/assets/2651240/483b00fc-0330-45b3-82c5-dc4118987564">

<details>
<summary>Show me the code</summary>

```html+erb
<div data-controller="dialog">
  <dialog data-dialog-target="box" class="dialog">
    <h1 class="text-lg font-semibold">Are you absolutely sure?</h1>
    <p class="text-sm text-subtle mbs-2">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>

    <div class="flex justify-end gap-sm mbs-4">
      <form method="dialog"><button class="btn btn--outline">Cancel</button></form>
      <button class="btn btn--primary">Continue</button>
    </div>
  </dialog>

  <button class="btn" data-action="dialog#showModal">
    Show dialog
  </button>
</div>
```
</details>

#### Dismissible Dialog

<img width="400" alt="dismissible_dialog" src="https://github.com/lazaronixon/css-zero/assets/2651240/50c8af20-46bb-4bf9-a233-78877f49e086">

<details>
<summary>Show me the code</summary>

```html+erb
<div data-controller="dialog">
  <dialog data-dialog-target="box" data-action="click->dialog#closeOnClickOutside" class="dialog" style="--dialog-width: 430px;">
    <form method="dialog">
      <button class="btn btn--plain p-0 dialog__close">
        <%= image_tag "x.svg", aria: { hidden: "true" }, size: 16 %>
        <span class="sr-only">Close</span>
      </button>
    </form>

    <div class="flex flex-col gap">
      <div class="flex flex-col gap-sm">
        <h1 class="text-lg leading-none font-semibold">Edit profile</h1>
        <p class="text-sm text-subtle">Make changes to your profile here. Click save when you're done.</p>
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

  <button class="btn" data-action="dialog#showModal">
    Show dialog
  </button>
</div>
```
</details>

### Input

<img width="500" alt="input" src="https://github.com/lazaronixon/css-zero/assets/2651240/f33a9d34-44b5-4c6b-ad88-1f0fd00b7291">

<details>
<summary>Show me the code</summary>

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

### Pagination

<details>
<summary>Show me the code</summary>

```html
<nav class="pagination" aria-label="Pages">
  <a href="/contacts?page=1" aria-label="Previous page">
    <%= image_tag "chevron-left.svg", role: "presentation", size: 16 %>
    <span>Previous</span>
  </a>
  <a href="/contacts?page=1">1</a>
  <a role="link" aria-disabled="true" aria-current="page">2</a>
  <a href="/contacts?page=3">3</a>
  <a role="link" aria-disabled="true" class="pi-3">
    <%= image_tag "ellipsis.svg", role: "presentation", size: 16 %>
  </a>
  <a href="/contacts?page=2" aria-label="Next page">
    <span>Next</span>
    <%= image_tag "chevron-right.svg", role: "presentation", size: 16 %>
  </a>
</nav>
```
</details>

### Progress

<img width="500" alt="progress" src="https://github.com/lazaronixon/css-zero/assets/2651240/32f7b665-ae85-48de-9338-0c255019122e">

<details>
<summary>Show me the code</summary>

```html
<label>
  <span class="sr-only">Loading progress</span>
  <progress value="75" max="100" class="progress"></progress>
</label>
```
</details>

### Switch

<img width="175" alt="image" src="https://github.com/lazaronixon/css-zero/assets/2651240/b47e28fb-6492-402c-b422-b896dfd3b713">

<details>
<summary>Show me the code</summary>

```html+erb
<div class="flex items-center gap-sm">
  <input type="checkbox" class="switch">
  <label for="status" class="text-sm font-medium">Airplane Mode</label>
</div>
```
</details>

### Table

<img width="500" alt="image" src="https://github.com/lazaronixon/css-zero/assets/2651240/c7b261a8-6d38-46f2-bf69-fd9385776bbe">

<details>
<summary>Show me the code</summary>

```html+erb
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

### More components soon...

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
