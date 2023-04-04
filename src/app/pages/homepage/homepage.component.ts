import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(public playerService: PlayerService, public router: Router) {}

  xClick() {
    this.playerService.oClicked = false;
  }

  oClick() {
    this.playerService.oClicked = true;
  }

  vsCpu() {
    this.router.navigate(['game-board']);
    console.log('O clicked:', this.playerService.oClicked);
  }

  vsPlayer() {
    this.router.navigate(['game-board']);
    console.log('O clicked:', this.playerService.oClicked);
  }
}
