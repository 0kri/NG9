import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MembersInterface } from 'src/app/interfaces/members-interface';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent implements OnInit {
  filteredMembers: MembersInterface[] = []
  search: FormControl = new FormControl()

  constructor(
    public membersService: MembersService,
  ) { }
  
  ngOnInit(): void {

    this.filteredMembers = this.membersService.members

    this.search.valueChanges.subscribe(
      result => {
        this.filteredMembers = this.membersService.members.filter(filteredMem => {
          return result? result == filteredMem.name : true
        })
      }
    )
  }

}
