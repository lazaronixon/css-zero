## [Unreleased]  
  - Add `color-filter-text-subtle` color and add `colorize-shade` utility class.
  - Change `.break-words` utility class.
  - Add breadcrumb component.
  - Remove not([class]) from button and alert

## [0.0.16] - 2024-07-04
  - Remove return string on `dialog` close.
  - Don't use `light-dark` function in base.css.
  - Use logical properties instead of physical properties.
  - Add grow-0, shrink, and bg-shade to utility classes.
  - Use `min-inline-size: fit-content;` instead of `white-space: nowrap;` for buttons.
  - Fix `transition-property` for dialog.

## [0.0.15] - 2024-07-03
  - `Dialog` was reimplemented to not support popover.

## [0.0.14] - 2024-07-02
  - `Alert dialog` was removed and `dialog` was changed to support `<dialog>` and `<dialog popover>`.
