## [Unreleased]
- Revert (Reduce gap-half row-gap)

## 1.1.6 - 2025-02-24
- Style for datepicker static month selector
- Add aria-current=page to sidebar_menu
- Reduce gap-half row-gap

## 1.1.5 - 2025-02-18
- Remove input outline on user-invalid focus-visible
- Remove field_with_errors from reset.css

## 1.1.4 - 2025-02-18
- Small adjusts for menu components
- Better input focus color for invalid inputs
- Rename .btn--tab to .tabs__button

## 1.1.3 - 2025-02-17
- Remove --btn-text-align from .btn

## 1.1.2 - 2025-02-17
- Input transparent instead of color-bg
- Don't use rounded button for .btn--icon
- Add --btn-text-align to .btn
- Set button position relative

## 1.1.1 - 2025-02-16
- Make .field_with_errors become pseudo-box by default.
- Add search method to form controller
- Add card-selectable to card

## 1.1.0 - 2025-02-15
- Improve command with first option select
- Rename transform.css to transforms.css
- Rename transition.css to transitions.css
- Remove transition-timing-function variables
- Update maska 3.0.4 -> 3.1.0
- Update tom-select 2.4.1 -> 2.4.2
- Remove --breakpoint-2xl variable
- Remove animations when prefers-reduced-motion
- Remove tablet breakpoint for sidebar-layout
- Add --sheet-size to sheet.css
- Small improvements to accordion
- Little gap for command and menu items
- Move flash to application layout in scaffolds
- Set default --flash-position to size-4
- Reduce badge line-height
- Reduce .table specificity with :where
- Add max-i-none utillity class
- Set default --btn-block-size --input-block-size to auto
- Set .gap-half column-gap: 0.25rem
- Set default cursor for accordion/button/datepicker/switch
- Small fix check_all_controller
- **Add sidebar_menu.css to layouts component**
- **Add flash--positive and flash--negative**
- **Add turbo_confirm component**
- **Add avatar-group**

## [1.0.6] - 2025-02-06
- Fix btn--loading

## [1.0.5] - 2025-02-01
- Increase gap for header items
- Small adjust on combobox alignment
- Add popover to usage

## [1.0.4] - 2025-01-25
- Change base.css to use zinc-950 for dark color-bg
- Fix border sheet.css

## [1.0.3] - 2025-01-24
- Fix css:install not adding javascript_importmap_tags

## [1.0.2] - 2025-01-24
- Import external css dependencies from esm.sh

## [1.0.1] - 2025-01-24
- Fix btn avatar size on safari

## [1.0.0] - 2025-01-24
- Set default text area --input-rows to 2lh
- Do not use auto resizable textarea in scaffold

- Rename var(--shadow-sm)  to	var(--shadow-xs)
- Rename var(--shadow)     to	var(--shadow-sm)
- Rename var(--blur-sm)    to	var(--blur-xs)
- Rename var(--blur)       to	var(--blur-sm)
- Rename var(--rounded-sm) to	var(--rounded-xs)
- Rename var(--rounded)    to	var(--rounded-sm)

- Merge tom-select.css and zcombobox.css   into combobox.css
- Merge flatpickr.css  and zdatepicker.css into datepicker.css
- Merge trix.css       and ztrix.css       into trix.css

- Files were moved from the root to `/css-zero`
- The file `_reset.css` was renamed to `reset.css`
- The file `zutilities.css` was renamed to `utilities.css`

- Previously, styles inside gems could mix with the styles from inside your application,
  the new architecture requires you to set the files manually.

Before:

```
<%= stylesheet_link_tag :all, "data-turbo-track": "reload" %>
```

Later:

```
<%= stylesheet_link_tag "css-zero/reset", "data-turbo-track": "reload" %>
<%= stylesheet_link_tag "css-zero/variables", "data-turbo-track": "reload" %>
<%= stylesheet_link_tag :app, "data-turbo-track": "reload" %>
<%= stylesheet_link_tag "css-zero/utilities", "data-turbo-track": "reload" %>
```

## [0.0.98] - 2025-01-23
- Add tabs class
- Adjust autosize textarea
- Remove :where from components

## [0.0.97] - 2025-01-22
- Simplify elements focus
- Small adjust space select option
- Small refactor input.css
- Move padding options to reset

## [0.0.96] - 2025-01-22
- autoanimate small adjust
- Add box-shadow to btn--tab selected
- Add scrollbar-color to base
- Add overscroll-behavior to base
- Increase checkbox/radios a bit
- Adjust textarea auto size

## [0.0.95] - 2025-01-20
- Add show to dialog_controller
- Add toggle and hideClear to popover_controller

## [0.0.94] - 2025-01-20
- Improve carousel
- Small refactor button
- Small refactor toggle
- Fix selector zcombobox
- Align avatar fallback text
- Use default checkbox for scaffold
- Reduce switch size

## [0.0.93] - 2025-01-17
- Small adjust close button for dialog and sheet
- Add table caption style
- Remove .popover--tooltip
- Improve tooltip timer

## [0.0.92] - 2025-01-16
- Set block size for button
- Early hide combobox
- Remove btn-tab min-block-size

## [0.0.91] - 2025-01-16
- Reduce height combobox

## [0.0.90] - 2025-01-16
- Increase loading btn--loading
- Accordion cosmetics
- Alert cosmetics
- Add box-shadow to buttons
- Increase dialog animation duration
- Add shadow to badge
- Change gap-half utility
- Add box-shadow to input
- Correct the arrow style of datalist in Chrome
- Card cosmetics
- Reduce input height
- Reduce command padding
- Reduce table padding
- Reduce size tab__list
- Reduce button height
- Animate combobox

## [0.0.89] - 2025-01-15
- Reimplement inputmask using maska
- Use tom-select.base instead of tom-select.complete

## [0.0.88] - 2025-01-13
- Move from jsdelivr to esm.sh
- Inputmask wasn't working with jsdelivr

## [0.0.87] - 2025-01-13
- Import only debounce from lodash
- Use jsdelivr and update dependencies

## [0.0.86] - 2025-01-11
- Dont early hide combobox
- Reduce h6 on prose
- Small refactor popover_controller
- Add context menu component
- Make menu auto resetable when visible

## [0.0.85] - 2025-01-09
- Merge listbox_controller and filter_controller into command_controller.

## [0.0.84] - 2025-01-09
- Don't hide [hidden='until-found']
- Don't need "after" filter event anymore
- Add --dialog-size variable

## [0.0.83] - 2025-01-08
- Reimplement command component

## [0.0.82] - 2025-01-08
- Improve prose

## [0.0.81] - 2025-01-07
- Fix layouts.css
- Improve carousel

## [0.0.80] - 2025-01-06
- popover--tooltip class
- New responsive font names, --text-base-responsive to text-fluid-base
- Remove .text-6xl, .text-7xl, .text-8xl, and .text-9xl

## [0.0.79] - 2025-01-05
- New popovers with floating-ui and popover tag. (popover/dropdown)
- Remove tooltip component

## [0.0.78] - 2025-01-04
- Lighter table foot color
- Keep the same spacing for layouts

## [0.0.77] - 2024-12-21
- set color-schema on reset.css

## [0.0.76] - 2024-12-21
- Update colors to oklch
- Update _reset.css
- Small refactor button.css
- Remove semicolon from javascript
- Perfect responsive font sizes
- Use responsive font size for flash

## [0.0.75] - 2024-12-18
- Small adjusts on dark colors
- Reduce auto-animate duration

## [0.0.74] - 2024-12-14
- Set card background color
- Set sidebar and header color.

## [0.0.73] - 2024-11-30
- Add z-index to popover

## [0.0.72] - 2024-11-29
- Improve combobox blinking
- Simplify layout css

## [0.0.71] - 2024-11-28
- Use lodash instead es-toolkit
- Use CDN minifed versions

## [0.0.70] - 2024-11-27
- Small refactor on autosave.
- Small refactor on chart.
- Use debounce from a library.

## [0.0.69] - 2024-11-27
- Increase animation duration for autoanimate
- Fix rounded-none
- Add group component

## [0.0.68] - 2024-11-25
- Fix dark text colors. (badge/button)

## [0.0.67] - 2024-11-25
- Autoanimate css only

## [0.0.66] - 2024-11-23
- Add autoanimate component

## [0.0.65] - 2024-11-22
- Small refactor on sortable_controller
- Small refactor on flash/prose/table
- Refactor button.css hover color
- New positive and negative colors

## [0.0.64] - 2024-11-17
- Small adjust prose.css
- Add --color-highlight
- Fix controller and mailer scaffold commands

## [0.0.63] - 2024-11-15
- Add otp input to input concerns
- Fix application.css (sprockets install)

## [0.0.62] - 2024-11-13
- Add tooltip component

## [0.0.61] - 2024-11-11
- Add navigation controller
- Add sortable controller

## [0.0.60] - 2024-11-08
- Improve flash messages

## [0.0.59] - 2024-11-08
- Set default input block size

## [0.0.58] - 2024-11-07
- Use text-decoration instead of text-decoration-line
- Use primary-color for turbo progress bar
- Fix scaffold system tests

## [0.0.57] - 2024-11-06
- Implement scaffolds

## [0.0.56] - 2024-11-03
- Reduce padding input block
- Small refactor zcombobox
- Small refactor zdatepicker
- Add chart component

## [0.0.55] - 2024-10-31
- Small refactor datepicker controller
- Remove inputmask on disconnect
- Fix today color datepicker
- Adjust day spacing in datepicker
- Small refactor in combobox controller
- Small refactor in accordion
- Import dependencies from a CDN

## [0.0.54] - 2024-10-28
- Remove --color-filter-text-subtle
- Add datepicker component

## [0.0.53] - 2024-10-27
- Simplify foreground/background color
- Fix grouped combobox dark color

## [0.0.52] - 2024-10-27
- Change combobox create to option_create
- Add inputmask
- Small update _reset
- Add autosave component
- Fix dark filter negative/positive colors
- Fix badge negative colors

## [0.0.51] - 2024-10-18
- Fix hover on safari mobile. (button/command/menu/tabs)
- Update checkbox and radio size
- Add trix component
- Adjust --leading-normal value
- Add dropdown
- Cosmetic on command
- Remove javascript helpers/initializers

## [0.0.50] - 2024-10-18
- Small refactor menu and command
- Prevent javascript error on filter
- Simplify menu
- Simplify tabs
- Trigger after event on filter controller
- Add list controller to command

## [0.0.49] - 2024-10-17
- Move form controller to its own component
- Add initializers structure on install
- Auto focus first menu item

## [0.0.48] - 2024-10-15
- Fix focus for tabs and menu
- Remove hover functionality from popover

## [0.0.47] - 2024-10-15
- Adjust checkbox and radio size
- Fix tab hover on dark mode
- Fix menu and command hover on dark mode
- Fix focus for tabs and menu
- Set input--actor icon color

## [0.0.46] - 2024-10-14
- Dont select first dropdown item on open

## [0.0.45] - 2024-10-13
- Remove dialog show method
- Remove --dialog-width css var
- Improve tabs focus handling
- Add popover
- Add dropdown

## [0.0.44] - 2024-10-09
- User popover instead of dialog for flash
- Introduce flash--extended
- Change checkbox size
- Change tabs
- Filter refactor

## [0.0.43] - 2024-10-04
- Fix resource

## [0.0.42] - 2024-10-04
- Rename command_controller to filter_controller
- Set flash max inline size
- Fix flash position
- Add --btn-inline-size
- Add check all

## [0.0.41] - 2024-10-03
- Add command empty
- Modernize carousel
- Responsive flash
- Mobile first css

## [0.0.40] - 2024-10-01
- Update avatar button
- Hide based on pwa, browser and print
- New layouts
- Remove check all
- Avatar button hover filter

## [0.0.39] - 2024-09-30
- Reduce delay copyable
- Add javascript helpers on install
- Use debounce for copyable
- Update accordion css
- Update button hover
- Decorate btn aria-disabled
- Update carousel
- Update tabs
- Change layout utility names
- Update size utility classes
- Update lightbox
- Update input
- Replace button--rounded with button--icon
- More button and input variables
- Update toggle
- Add show/hide utilities
- Add command

## [0.0.38] - 2024-09-24
- Add local_time_controller
- Small adjust plain button
- Fix resources mapping
- Change revealable input
- Change copyable input

## [0.0.37] - 2024-09-23
- Key navigation to tabs
- Rename concern controllers

## [0.0.36] - 2024-09-23
- Change dialog target box -> menu
- Change tabs to use index instead of ids
- Remove border style utilities
- Add clear button to inputs
- Fix btn--positive and btn--negative icon colors
- Add reveal button to password inputs
- Add copy button to inputs
- Add dependent checkbox
- Add form controller to switch
- Add autoselect controller
- Add fullscreen controller
- btn--outline is the default
- Refactor pagination and tabs
- Add hotkey controller
- Add web share controller
- Update button colors
- Simplify tabs css
- Simplify button toggle
- Add input_concerns
- Add upload preview
- Reduce space for breadcrumb
- Add avatar--btn
- Add button hover filter
- Add btn--pressed
- Add btn--borderless
- Remove margin from btn--plain
- Border color instead of border width for buttons
- Remove pagination.css
- Remove some rounded and shadow utilities
- Add btn--rounded
- Rename layout utilities
- Add lightbox component

## [0.0.35] - 2024-09-10
- New gap utilities values.
- Rename gap-sm to gap-half.

## [0.0.34] - 2024-09-10
- Remove tab helpers.
- Use rows=auto to text-area auto grow.
- text black to zinc-950.
- new filtered colors.
- fix invalid feedback.
- Remove button_to_close_dialog.
- Fix dialog and sheet.

## [0.0.33] - 2024-08-30
- Change tabs to use aria attributes.

## [0.0.32] - 2024-08-30
- Add class to tab_button helper.

## [0.0.31] - 2024-08-29
- Add layouts.
- Add border-b, border-i.
- Add sheet--right, sheet--left.
- Add input--actor.
- Add w-min to utilities.
- Change table hover color.
- Add tabs.

## [0.0.29] - 2024-08-07
  - Simplify sr-only.
  - Add border dotted.
  - Remove text-center sheet.
  - Update transition property.
  - Remove grid utilities.
  - Simplify button.
  - Remove relative from toggle.
  - Adjusts input class.
  - Move option back to input.
  - Remove transition-timing-function from switch
  - Accordion height animation.
  - Remove z-index variables.

## [0.0.28] - 2024-07-26
  - Revert button size loading.
  - Hide scrollbar for carousel on safari.
  - Remove align-items from badge.
  - Remove full width from accordion.
  - Revert card component.
  - Remove !important from dialog.css.

## [0.0.27] - 2024-07-25
  - Simplify flash.
  - Simplify dialog__close.
  - Add turbo-frame to _reset.css.
  - Adjust loading button.
  - Remove btn border color.
  - Add toggle buttons.
  - Remover border width input.
  - Adjust focus on toggle.

## [0.0.26] - 2024-07-23
  - Remove comments.
  - Move options to _reset.css.
  - Add z-index variables.

## [0.0.25] - 2024-07-23
  - Reduce rounded and shadow utilities
  - Add skeleton.
  - Add color-link.
  - Add add color-selected-dark.
  - Add invalid feedback to inputs.
  - Better reset for dialog page scroll.
  - Add Flash message.
  - Set bg and color to card.
  - Small adjust in carousel.
  - Remove !important from hidden, contents and inputs.

## [0.0.24] - 2024-07-21
  - Hide spinner for step any inputs.
  - Fix empty date field height on safari IOS.
  - Move "Prevent page scroll when dialog is open" to reset.
  - Add sheet component.

## [0.0.23] - 2024-07-20
  - Don't disable text area resize.
  - Add hover to accordion and table.
  - Add new object-fit utilities.
  - Add aspect ratio variables.
  - Add carousel.

## [0.0.22] - 2024-07-18
  - Adjust prose headers.
  - Adjust responsive fonts again.
  - Use antialiased fonts and bold links on prose.

## [0.0.21] - 2024-07-17
  - Remove antialiased utility.
  - Fix --text-xl-responsive.
  - Remove --width-prose.
  - Rename reponsive font utilities
  - Apply font responsive and max-inline-size to prose

## [0.0.20] - 2024-07-17
  - Add shadow-inner utility.
  - Add responsive fonts.
  - Remove font-size and antialiased from prose.
  - Remove link color from prose.

## [0.0.19] - 2024-07-16
  - Add more animations.
  - Remove shadow-xs.
  - Remove shadow from button.
  - Use color-primary for focus.
  - Fix dark --color-border-dark.
  - Add prose component.
  - Fix card-shadow.

## [0.0.18] - 2024-07-14
  - Transform dialog in a drawer on mobile
  - Correct the arrow style of datalist in Chrome.
  - Fix badge outline border.
  - Add pagination component.
  - Change collapsible component.
  - Fix default icon color alert.
  - Fix badge size.
  - Add button_to_close_dialog helper.
  - Add autogrow textarea.
  - Input server side validation.
  - Add padding to select option.
  - Avatar use local variable for avatar-size
  - Remove size-3 from the utilities
  - Add modern font stack
  - Rename --color-border-darker to --color-border-dark.
  - Introduce --color-border-light.
  - More border utilities.

## [0.0.17] - 2024-07-06
  - Add `color-filter-text-subtle` color and add `colorize-shade` utility class.
  - Change `.break-words` utility class.
  - Add breadcrumb component.
  - Remove not([class]) from button and alert
  - Add collapsible component.
  - Add size-3 to utility classes.
  - Add avatar component.

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
