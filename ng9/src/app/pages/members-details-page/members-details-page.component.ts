import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersInterface } from 'src/app/interfaces/members-interface';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members-details-page',
  templateUrl: './members-details-page.component.html',
  styleUrls: ['./members-details-page.component.css']
})
export class MembersDetailsPageComponent implements OnInit {

  public memberId!: any;
  public member! :MembersInterface[]

  constructor(
    private _route: ActivatedRoute,
    private _membersService: MembersService

  ){}

  ngOnInit(): void {
    this.memberId = this._route.snapshot.params['id']
    this.member = this._membersService.members.filter(member => {
      return member.id == this.memberId
    })
    console.log(this.member)
  }


}
