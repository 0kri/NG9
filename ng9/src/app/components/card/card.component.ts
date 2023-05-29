import { Component, Input } from '@angular/core';
import { MembersInterface } from 'src/app/interfaces/members-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() membersData! : MembersInterface
}
