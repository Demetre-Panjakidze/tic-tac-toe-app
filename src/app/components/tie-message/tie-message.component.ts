import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/gameResult.model';

@Component({
  selector: 'app-tie-message',
  templateUrl: './tie-message.component.html',
  styleUrls: ['./tie-message.component.scss'],
})
export class TieMessageComponent {
  @Input() messageType: Result | undefined;
}
