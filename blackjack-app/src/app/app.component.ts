import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'black-jack';
  @Input() rank = 'k';
  @Input() suit = '♦';

  // getClassName() {
  //   return {'card': true, 'rank-k': true, 'diams': true};
  // }

}
