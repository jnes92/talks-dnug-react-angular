import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventName = '.Net UG Koblenz';
  sayHello() {
    if (this.myName.length > 0) {
      this.nameLabelIsVisible = true;
    }
  }
}
