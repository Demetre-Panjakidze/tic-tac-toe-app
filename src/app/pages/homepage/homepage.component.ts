import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Opponent, Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  Player = Player;
  constructor(public playerService: PlayerService, public router: Router) {}

  xClick() {
    this.playerService.chosenRole = Player.X;
  }

  oClick() {
    this.playerService.chosenRole = Player.O;
  }

  vsCpu() {
    this.router.navigate(['game-board']);
    this.playerService.chosenOpponent = Opponent.Cpu;
    console.log('current role:', this.playerService.chosenRole);
    console.log('current opponent:', this.playerService.chosenOpponent);
  }

  vsPlayer() {
    this.router.navigate(['game-board']);
    this.playerService.chosenOpponent = Opponent.Player;
    console.log('current role:', this.playerService.chosenRole);
    console.log('current opponent:', this.playerService.chosenOpponent);
  }
}
