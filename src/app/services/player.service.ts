import { Injectable } from '@angular/core';
import { Opponent, Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  chosenRole: Player = Player.O;
  chosenOpponent: Opponent | undefined;
  oTurn: boolean = false;
  xTurn: boolean = true;

  userWon: number = 0;
  userLost: number = 0;
  tie: number = 0;

  constructor() {}
}
