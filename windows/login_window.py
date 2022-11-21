from kivy.lang import Builder
from kivy.uix.anchorlayout import AnchorLayout
from kivy.uix.button import Button
from kivy.uix.gridlayout import GridLayout
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.label import MDLabel

from windows.window import Window

username_input = """
MDTextField:
    mode: "rectangle"
    color_mode: "custom"
    fill_color: 1, 1, 1, 1
    line_color_normal: 0.1, 1, 1, 1
    line_color_focus: 0.1, 1, 1, 1
    font_size: 20
    pos_hint:{'center_x': 0.5, 'center_y': 0.5}
    size_hint: 0.5, 0.25
    halign:"center"
    icon_right_color: 1, 1, 1, 1
    background_color: 0.8, 240, 25, 43
"""


class LoginWindow(Window):

    def __init__(self, controller, **kw):
        super(LoginWindow, self).__init__(controller, **kw)
        self.pin_code = ""

        self.title_label._set_text("Введите логин и пароль.")
        self.title_label.font_size = 30

        button_layout = GridLayout(cols=1)

        log_in_button = Button(text="Войти", background_color=(0.99, 0, 13/255, .8),
                               height=25, width=10,
                               on_press=lambda: controller.set_present_screen_name("Menu"))

        self.pin_code_label12 = Builder.load_string(username_input)
        pin_code_layout = AnchorLayout(anchor_x='center', anchor_y='center')

        pin_code_layout.add_widget(self.pin_code_label12)
        self.controlled_layout.add_widget(pin_code_layout)

        next_layout = AnchorLayout(anchor_x='right', anchor_y='center')

        next_layout.add_widget(log_in_button)
        button_layout.add_widget(next_layout)
        self.controlled_layout.add_widget(button_layout)

    def on_leave(self, *args):
        self.pin_code_label12.text = ""
        # self.title_label._set_text("Введите пинкод")
