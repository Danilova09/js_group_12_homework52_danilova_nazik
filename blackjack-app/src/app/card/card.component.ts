import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() rank = 'k';
  @Input() suit = '♦';

  getClassName() {
    return {'rank': true, 'suit': true};
  }

}
