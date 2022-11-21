from kivy.uix.screenmanager import Screen
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.label import MDLabel


class Window(Screen):

    def __init__(self, controller, **kw):
        super(Window, self).__init__(**kw)
        self.controller = controller

        self.screen_widget = MDBoxLayout(orientation="vertical",
                                         pos_hint={"center_x": 0.5,
                                                   "center_y": 0.5},
                                         md_bg_color=(248, 246, 246, 0.8))

        self.title_label = MDLabel(text="", font_size=200, halign="center",
                                   size_hint_y=None, height=144,
                                   )

        self.controlled_layout = MDBoxLayout(orientation="vertical",
                                             pos_hint={
                                                 "center_x": 0.5, "center_y": 0.5},
                                             md_bg_color=(248, 246, 246, 0.8))

        self.screen_widget.add_widget(self.title_label)
        self.screen_widget.add_widget(self.controlled_layout)

        self.add_widget(self.screen_widget)

    def work(self, controller):
        pass
