import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/gameResult.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  result = Result;
  @Input() messageType: Result | undefined;
}
