---
name: css-zero
description: Build Rails UI with CSS Zero, a no-build component kit of plain CSS and Stimulus controllers, using the official showcase app as the source of truth for markup. Use whenever the Gemfile includes css-zero, the user mentions CSS Zero, or the user asks for view UI in a Rails app without a CSS build step (buttons, forms, inputs, dialogs/modals, sheets, dropdowns, popovers, tabs, tables, cards, badges, sidebars, flash messages, comboboxes, datepickers, and so on), even if they don't name CSS Zero.
---

# CSS Zero

CSS Zero is a Rails gem that works like a "no build" Tailwind. It has no view helpers and no
components. Its generators copy plain CSS, Stimulus controllers and SVG images into the app,
and you write the HTML yourself. After that, the copied files belong to the app.

So most of the work is writing markup well, and the best guide to that markup is the
showcase app the author maintains.

## Setup

Check what is already there before adding anything: look for `css-zero` in the `Gemfile` and
at the files under `app/assets/stylesheets/`. If the gem is missing:

```bash
bundle add css-zero --github=lazaronixon/css-zero
bin/rails generate css_zero:install
```

Install writes `base.css` and a new application layout, and adds a basic set of components
(layouts, flash, alert, input, button). It overwrites the layout, so if the app already has
a custom one, merge it by hand.

## The showcase is your reference

Clone it once per machine and read it whenever you need a component:

```bash
[ -d /tmp/css_zero_showcase ] || git clone --depth=1 https://github.com/lazaronixon/css_zero_showcase /tmp/css_zero_showcase
```

Where to look:

- `test/components/previews/<component>_preview.rb` gives the install command for the
  component and lists its variants.
- `test/components/previews/<component>_preview/*.html.erb` holds the real markup for each
  variant. This is the closest thing to documentation, so start here.
- `app/views/` has whole screens built from several components, such as a task table, a
  form with dependent selects, and infinite scroll. Read these when you are building a
  page, not a single widget.
- `app/views/layouts/application.html.erb` shows how the stylesheets load: reset, then
  variables, then the app's CSS, then utilities.
- `app/assets/stylesheets/` and `app/javascript/controllers/` show what the generated files
  look like.

Copy the structure of the closest variant and adapt the content. Avoid guessing class names
or element structure from memory. The CSS often depends on exact nesting (`dialog__content`
inside `.dialog`, for example), and a near-miss renders quietly wrong. The showcase may
reach a little ahead of the released gem. If a class from a preview has no rule in the
app's CSS, regenerate the component or copy the rule over.

## Building a screen

1. Work out which components the screen needs, then match each one to a preview.
2. Add any that are missing:
   `bin/rails generate css_zero:add dialog tabs dropdown`.
   Run `bin/rails generate css_zero:add --help` to list every component. Some
   "components" are only a Stimulus controller, such as autosave, hotkey, local_time or
   sortable. Some share files: dropdown and context_menu both bring popover and menu.
   Re-running the generator is fine.
3. Write the view from the preview markup. Use Rails helpers (`form_with`, `link_to`,
   `button_tag`) where the preview does, and give them the same classes.
4. Use the utility classes for layout and spacing (`flex`, `items-center`, `gap`, `p-4`,
   `mbe-2`, `text-sm`, `text-subtle`, and so on) rather than writing one-off CSS.
5. Wire up behaviour the same way the preview does. Many components rely on the platform
   itself, for example `<dialog>` with `commandfor`/`command="show-modal"`, the popover API,
   and `<details>`. Others use a Stimulus controller through `data-controller` and
   `data-action`. Don't add JavaScript the preview doesn't need.

## Utilities and tokens

The utility classes and design tokens ship inside the gem, in
`app/assets/stylesheets/css-zero/`: `utilities.css`, `colors.css`, `sizes.css`,
`typography.css`, `borders.css`, `effects.css`, `animations.css` and others. Run
`bundle show css-zero` to find that path. When you're not sure whether a utility or variable
exists, grep those files instead of inventing one.

The semantic theme lives in the app's own `app/assets/stylesheets/base.css`, which defines
`--color-bg`, `--color-text`, `--color-text-subtle`, `--color-border`, `--color-primary` and
similar tokens, plus their dark-mode values. Use those, along with the gem's palette and
size variables, in any custom CSS. That keeps it consistent with the rest of the UI and in
step with dark mode. To restyle the whole app, edit `base.css`.

Spacing utilities use logical properties: `mbs`/`mbe` mean block start/end, `mis`/`mie` mean
inline start/end.

## Customizing

The generated CSS and controllers are app code, so change them when the design calls for
it. Edit `button.css`, add a variant, or adjust a controller. That is the intended
workflow, and it beats piling overrides on top somewhere else. For small changes, many
components expose CSS custom properties that you can set inline or in a parent rule, for
example `style="--dialog-size: 24rem"` or `--icon-size`. Check the component's CSS to see
which ones exist.

Icons are a separate opt-in layer. `css_zero:add icons` adds `icons.css` with
`icon icon--<name>` classes. Some components ship their own SVGs and don't need it.

## Details that are easy to miss

- Icon-only buttons need an accessible name. The previews put a `sr-only` span next to an
  `aria-hidden` icon.
- Dialogs carry `aria-labelledby`/`aria-describedby`, and confirmation dialogs carry
  `role="alertdialog"`, as the previews show.
- The gem also overrides Rails scaffold and authentication templates. Running
  `bin/rails g scaffold` or `bin/rails g authentication` produces views that are already
  styled, which makes them a good starting point for CRUD screens.

## Check your work

Start the app (`bin/dev` or `bin/rails server`) and look at the page, including light and
dark mode if the app supports both. Check that every class you used is defined in the app's
stylesheets or the gem's utilities. Unknown classes fail silently.
