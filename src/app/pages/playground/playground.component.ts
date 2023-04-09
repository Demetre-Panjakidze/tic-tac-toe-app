import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/gameResult.model';
import { Player, Opponent } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  boxesArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isActiveBox: unknown[] = Array.from({ length: 9 }).fill(false);
  isHoveredBox: unknown[] = Array.from({ length: 9 }).fill(false);
  Opponent = Opponent;
  Player = Player;
  messageType: Result | undefined;
  result = Result;

  constructor(public playerService: PlayerService, public router: Router) {}

  restart() {
    this.messageType = Result.Won;
    this.playerService.tie = 0;
    this.playerService.userWon = 0;
    this.playerService.userLost = 0;
  }

  onClickBox(box: string) {
    this.playerService.oTurn = !this.playerService.oTurn;
    this.playerService.xTurn = !this.playerService.xTurn;

    switch (box) {
      case 'onClickBox1':
        this.isActiveBox[1] = true;
        break;
      case 'onClickBox2':
        this.isActiveBox[2] = true;
        break;
      case 'onClickBox3':
        this.isActiveBox[3] = true;
        break;
      case 'onClickBox4':
        this.isActiveBox[4] = true;
        break;
      case 'onClickBox5':
        this.isActiveBox[5] = true;
        break;
      case 'onClickBox6':
        this.isActiveBox[6] = true;
        break;
      case 'onClickBox7':
        this.isActiveBox[7] = true;
        break;
      case 'onClickBox8':
        this.isActiveBox[8] = true;
        break;
      case 'onClickBox9':
        this.isActiveBox[9] = true;
        break;
      default:
        break;
    }
  }

  onHover(boxNumber: number) {
    this.isHoveredBox[boxNumber] = true;
  }

  onMouseOut(boxNumber: number) {
    this.isHoveredBox[boxNumber] = false;
  }
}
