class Controller:
  def __init__(self, model):
    self.model = model
    self.view = None
    
  def set_view(self, view):
    self.view = view
    
  def set_current_screen_name(self, name):
        self.view.set_current_screen_name(name)