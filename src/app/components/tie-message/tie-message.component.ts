import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/gameResult.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-tie-message',
  templateUrl: './tie-message.component.html',
  styleUrls: ['./tie-message.component.scss'],
})
export class TieMessageComponent {
  @Input() messageType: Result | undefined;
  constructor(public playerService: PlayerService, public router: Router) {}
}
