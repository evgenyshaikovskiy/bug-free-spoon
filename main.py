from controller import Controller
from model import Model
from view import View

if __name__ == '__main__':
  model = Model()
  controller = Controller(model)
  view = View(controller)
  controller.set_view(view)
  view.launch()
  