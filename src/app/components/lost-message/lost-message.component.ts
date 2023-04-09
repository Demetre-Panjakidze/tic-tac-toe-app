import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/gameResult.model';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-lost-message',
  templateUrl: './lost-message.component.html',
  styleUrls: ['./lost-message.component.scss'],
})
export class LostMessageComponent {
  @Input() messageType: Result | undefined;
  player = Player;
  xImageColor: string =
    'invert(62%) sepia(28%) saturate(973%) hue-rotate(129deg) brightness(101%) contrast(87%)';
  oImageColor: string =
    'invert(66%) sepia(55%) saturate(488%) hue-rotate(349deg) brightness(134%) contrast(80%)';

  constructor(public playerService: PlayerService, public router: Router) {}

  urlMaker() {
    if (this.playerService.chosenRole == this.player.X) {
      return 'assets/images/icon-o-default.svg';
    }
    return 'assets/images/icon-x-default.svg';
  }
}
