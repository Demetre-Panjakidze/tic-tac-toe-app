import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/gameResult.model';

@Component({
  selector: 'app-restart-message',
  templateUrl: './restart-message.component.html',
  styleUrls: ['./restart-message.component.scss'],
})
export class RestartMessageComponent {
  @Input() messageType: Result | undefined;
}
