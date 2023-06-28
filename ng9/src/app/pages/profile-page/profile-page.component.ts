import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  data$!: Observable<any>

  constructor(
    private _profileService: ProfileService
  ) {

  }

  ngOnInit(): void {
    this.data$ = this._profileService.getProfile()
  }
}
