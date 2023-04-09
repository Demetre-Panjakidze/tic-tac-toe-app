import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { InvalidLinkComponent } from './pages/invalid-link/invalid-link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MessageComponent } from './components/message/message.component';
import { RestartMessageComponent } from './components/restart-message/restart-message.component';
import { TieMessageComponent } from './components/tie-message/tie-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlaygroundComponent,
    InvalidLinkComponent,
    MessageComponent,
    RestartMessageComponent,
    TieMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
