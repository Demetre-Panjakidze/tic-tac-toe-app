import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  oClicked: boolean = true;
  xClick() {
    this.oClicked = false;
  }
  oClick() {
    this.oClicked = true;
  }
  vsCpu() {
    console.log(this.oClicked);
  }
  vsPlayer() {
    console.log(this.oClicked);
  }
}
