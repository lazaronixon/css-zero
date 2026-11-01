---
name: css-zero
description: Build Rails UI with CSS Zero — install the gem, add components with its generator, and write their markup from the official recipes. Use this whenever the app's Gemfile includes css-zero, or the user wants a modal, dropdown, menu, tabs, sheet, toast, form, table, sidebar layout, or any other UI piece in a Rails view without a CSS build step, even if they don't say "css-zero".
---

# CSS Zero

CSS Zero is a Rails gem that copies plain CSS, Stimulus controllers, and SVG icons into the
app. It has no view helpers: you install a component with a generator and write its markup
yourself.

## Setup

```bash
bundle add css-zero --github=lazaronixon/css-zero
bin/rails generate css_zero:install
```

- `bin/rails generate css_zero:install` sets up the app once, including `base.css` with the semantic colors (`--color-bg`, `--color-text`, `--color-border`, ...) that components rely on.
- `bin/rails generate css_zero:add <component> [...]` copies a component's CSS, Stimulus controllers, and icons into the app.
- `scaffold`, `authentication`, `controller`, and `mailer` generate CSS Zero views. Start CRUD and auth screens with them.

## Recipes

Repository: https://github.com/lazaronixon/css_zero_showcase (small, easiest to clone or download).

- `test/components/previews/<component>_preview/*.html.erb`: one file per variant.
- `test/components/previews/<component>_preview.rb`: comments with the install command, and where needed, dependencies, backend code, and markup that goes outside the recipe.
- `app/views/lookbook/preview/`: partials some recipes render.
- `app/assets/stylesheets/icons.css`, `app/assets/images/*.svg`: every Lucide icon the recipes use. `css_zero:add icons` installs a few; copy any other SVG and its `.icon--<name>` rule into the app.
- `app/assets/images/`: demo photos, in any image format.

## Foundations

In `$(bundle show css-zero)/app/assets/stylesheets/css-zero/`: the utility classes, base element styles, and design tokens. Read `utilities.css` before writing markup; its class names differ from Tailwind's.

## Notes

- Recipes are examples. Adapt them to the app.
- Copied code is free to change, so edit it directly instead of overriding it.
- A recipe can use other components, such as `icon` from `icons`. A missing component fails silently.
- Keep the Stimulus wiring: controllers, actions, targets, and values (`data-*` or a Rails `data:` hash).
- Ids can change, as long as the `commandfor` and `popovertarget` attributes that point to them change too.
- Use semantic colors, not the raw palette (`--zinc-500`), so dark mode works.
- Recipes follow css-zero master. Older gem releases may lack newer classes.
