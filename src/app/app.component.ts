import { Component } from '@angular/core';
// import {rename} from '@core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentShared';
  constructor() {
    // console.log(rename());
  }

}
