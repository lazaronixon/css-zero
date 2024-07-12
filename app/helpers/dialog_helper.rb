module DialogHelper
  def button_to_close_dialog(content = nil, **, &)
    tag.form tag.button(content, **, &), method: :dialog
  end
end