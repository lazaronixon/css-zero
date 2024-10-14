## [Unreleased]

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
