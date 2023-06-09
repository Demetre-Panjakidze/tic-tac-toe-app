import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/gameResult.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-restart-message',
  templateUrl: './restart-message.component.html',
  styleUrls: ['./restart-message.component.scss'],
})
export class RestartMessageComponent {
  @Input() messageType: Result | undefined;

  constructor(public playerService: PlayerService, public router: Router) {}

  gameRestart() {
    this.messageType = undefined;
    this.playerService.tie = 0;
    this.playerService.userWon = 0;
    this.playerService.userLost = 0;
  }

  clickCancel() {
    this.messageType = undefined;
  }
}
