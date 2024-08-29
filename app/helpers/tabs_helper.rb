module TabsHelper
  def tab_button(content = nil, value:, **, &)
    tag.button(content, data: { tabs_target: "button", action: "tabs#select", value: }, **, &)
  end
end