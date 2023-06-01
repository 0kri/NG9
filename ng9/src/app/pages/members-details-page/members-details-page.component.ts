import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members-details-page',
  templateUrl: './members-details-page.component.html',
  styleUrls: ['./members-details-page.component.css']
})
export class MembersDetailsPageComponent implements OnInit {

    public memberId!: number | string;

  constructor(
    private _route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.memberId = this._route.snapshot.params['id']
  }


}
