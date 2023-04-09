import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/gameResult.model';

@Component({
  selector: 'app-won-message',
  templateUrl: './won-message.component.html',
  styleUrls: ['./won-message.component.scss'],
})
export class WonMessageComponent {
  @Input() messageType: Result | undefined;
}
