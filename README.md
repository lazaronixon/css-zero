# CSS Zero

An opinionated CSS starter kit for your Ruby on Rails application. You can think of it like a "no build" Tailwind CSS.

## Installation

Add this gem to your project.

```
bundle add css-zero
```

Run the install command.

```
bin/rails generate css_zero:install
```

Add the additional components you need. (Optional)

```
bin/rails generate css_zero:add --help
```

## Components

[<img src="https://github.com/user-attachments/assets/3a7fbd1e-5cc8-4476-a60c-52bc28efca29">](https://csszero.lazaronixon.com)

## Utility classes and variables

Check the [CSS files](app/assets/stylesheets) in the repository to see the available variables and utility classes.

## Scaffold

This gem implements custom templates for scaffolds and authentication.

## Icons

Some icons in the examples may not be included in your project. If you're looking for high-quality icons, I recommend checking out [Lucide](https://lucide.dev).

## Figma

You can use use any shadcn compatible project like [shadcn/ui design system](https://www.figma.com/community/file/1203061493325953101).

## Development

To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and the created tag, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lazaronixon/css-zero. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the CSS Zero project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/lazaronixon/css-zero/blob/master/CODE_OF_CONDUCT.md).
