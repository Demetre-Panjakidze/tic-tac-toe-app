import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/gameResult.model';

@Component({
  selector: 'app-lost-message',
  templateUrl: './lost-message.component.html',
  styleUrls: ['./lost-message.component.scss'],
})
export class LostMessageComponent {
  @Input() messageType: Result | undefined;
}
