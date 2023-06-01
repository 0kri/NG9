import { Component } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent {

  constructor(
    public membersService: MembersService,
  ){}
}
