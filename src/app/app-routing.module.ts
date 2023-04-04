import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { InvalidLinkComponent } from './pages/invalid-link/invalid-link.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'game-board',
    component: PlaygroundComponent,
  },
  {
    path: '**',
    component: InvalidLinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
