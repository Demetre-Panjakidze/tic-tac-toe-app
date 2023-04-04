import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { InvalidLinkComponent } from './pages/invalid-link/invalid-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlaygroundComponent,
    InvalidLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
