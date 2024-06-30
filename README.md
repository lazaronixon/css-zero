# CSS Zero

An opinionated CSS starter kit for your application. You can think of it like a "no build" Tailwind CSS.

## Installation

Add this gem to the Gemfile and run bundle install.

```
bundle add css-zero
```

Add the base.css file to your application.

```
bin/rails generate css_zero:install
```

Add only the components you need. (Optional)

```
bin/rails generate css_zero:add accordion alert badge button card dialog input progress separator switch table
```

This gem requires [Propshaft](https://github.com/rails/propshaft), Make sure to load all the CSS files in your `layout.html.erb`.

```html+erb
<%= stylesheet_link_tag :all, "data-turbo-track": "reload" %>
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

Check the [CSS files](app/assets/stylesheets) in the repository for reference.

## Components

<img width="400" alt="Components" src="https://github.com/lazaronixon/css-zero/assets/2651240/3edc4bd1-d3e3-4aaa-a9e1-34e0fffc4378">

<details>
<summary>Show me the code!</summary>

```html+erb
<artice class="flex flex-col pb-10 pi-2 mi-auto w-full" style="gap: 4rem; max-width: 56rem">
  <%= form_with url: "/users", class: "flex flex-col gap" do |form| %>
    <div class="flex flex-col gap-sm">
      <%= form.label :full_name, class: "text-sm font-medium" %>
      <%= form.text_field :full_name, class: "input", required: true %>
    </div>

    <div class="flex flex-col gap-sm">
      <%= form.label :date_picker, class: "text-sm font-medium" %>
      <%= form.date_field :date_picker, class: "input" %>
    </div>

    <div class="flex flex-col gap-sm">
      <%= form.label :age_range, class: "text-sm font-medium" %>
      <%= form.select :age_range, ["0-13", "14-17", "18-23"], {}, class: "input" %>
    </div>

    <div class="flex flex-col gap-sm">
      <%= form.label :comment, class: "text-sm font-medium" %>
      <%= form.text_area :comment, class: "input", style: "--input-lines: 4lh" %>
    </div>

    <label class="flex items-center gap-sm" for="terms">
      <%= form.check_box :terms, class: "switch" %>
      <span class="text-sm font-medium">Accept terms and conditions</span>
    </label>
  <% end %>

  <section class="flex flex-wrap items-center gap" aria-busy>
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
  </section>

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
        <th>Leslie Alexander</td>
        <td>leslie.alexander@example.com</td>
        <td class="text-subtle">Admin</td>
      </tr>
      <tr>
        <th>Michael Foster</td>
        <td>michael.foster@example.com</td>
        <td class="text-subtle">Owner</td>
      </tr>
      <tr>
        <th>Dries Vincent</td>
        <td>dries.vincent@example.com</td>
        <td class="text-subtle">Member</td>
      </tr>
    </tbody>
  </table>

  <div class="accordion">
    <details name="my_accordion">
      <summary>Is it accessible?</summary>
      <p class="mbe-4 text-sm">Yes. It adheres to the WAI-ARIA design pattern.</p>
    </details>
    <details name="my_accordion">
      <summary>Is it styled?</summary>
      <p class="mbe-4 text-sm">Yes. It comes with default styles that matches the other components' aesthetic.</p>
    </details>
    <details name="my_accordion">
      <summary>Is it animated?</summary>
      <p class="mbe-4 text-sm">Yes. It's animated by default, but you can disable it if you prefer.</p>
    </details>
  </div>

  <div class="alert alert--negative flex items-start gap">
    <%= image_tag("circle-alert.svg", role: "presentation", size: 16) %>
    <div class="flex flex-col">
      <h1 class="font-medium leading-none mbe-1">Error</h1>
      <p class="text-sm">Your session has expired. Please log in again.</p>
    </div>
  </div>

  <section class="flex justify-start gap">
    <div class="badge">Badge</div>
    <div class="badge badge--secondary">Secondary</div>
    <div class="badge badge--outline">Outline</div>
    <div class="badge badge--negative">Negative</div>
  </section>

  <section class="card flex flex-col gap" style="width: 350px; gap: 1.5rem;">
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
  </section>

  <section>
    <dialog id="my_dialog" class="dialog" style="--dialog-max-width: 28rem">
      <form method="dialog">
        <button class="btn btn--plain dialog__close p-0">
          <%= image_tag("x.svg", role: "presentation", size: 16) %>
          <span class="sr-only">Close dialog</span>
        </button>
      </form>

      <div class="flex flex-col">
        <h1 class="text-lg font-semibold">Share link</h1>
        <p class="text-sm text-subtle">Anyone who has this link will be able to view this.</p>
      </div>

      <div class="flex gap-sm mbs-4">
        <div class="flex gap-sm w-full">
          <label for="link" class="sr-only">Link</label>
          <input type="input" id="link" value="https://github.com/lazaronixon/css-zero" class="input" readonly autofocus>
        </div>
        <button class="btn btn--primary">Copy</button>
      </div>
    </dialog>

    <button class="btn" data-controller="show-dialog" data-action="show-dialog#showModal" data-show-dialog-target-value="#my_dialog">
      Show modal
    </button>
  </section>
</artice>
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
