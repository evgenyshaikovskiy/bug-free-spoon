from kivymd.app import MDApp
from kivy.uix.screenmanager import Screen, ScreenManager
import time

from kivy.config import Config
from kivy.lang import Builder

from windows.login_window import LoginWindow


Config.set('graphics', 'resizable', '0')
Config.set('graphics', 'width', '800')
Config.set('graphics', 'height', '1280')


class View(MDApp):
    def __init__(self, controller, **kwargs):
        super(View, self).__init__(**kwargs)
        self.controller = controller
        self.screens = ScreenManager()
        
        # inject screens
        self.screens.add_widget(LoginWindow(name='Login Window', controller=self.controller))

    def set_current_screen_name(self, name):
        if name == 'stop':
            self.stop()
        else:
            self.screens.current = name

    def get_current_screen_name(self, name):
        return self.screens.current

    def build(self):
        return self.screens

    def launch(self):
        self.run()
