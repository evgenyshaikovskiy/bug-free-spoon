import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TableOfRanksComponent } from './table-of-ranks/table-of-ranks.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { VideoPageComponent } from './video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    FirstScreenComponent,
    MainMenuComponent,
    TableOfRanksComponent,
    AccountPageComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
