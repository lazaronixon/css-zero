module TabsHelper
  def tab_button(content = nil, id:, value:, **, &)
    tag.button(content, id:, class: "btn", role: "tab", aria: { controls: value }, data: { tabs_target: "button", action: "tabs#select", value: }, **, &)
  end

  def tab_panel(id, labelled_by:, **, &)
    tag.div(id:, role: "tabpanel", aria: { labelledby: labelled_by }, data: { tabs_target: "tab" }, **, &)
  end
end