import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-lists-list-page',
  templateUrl: './lists-list-page.component.html',
  styleUrls: ['./lists-list-page.component.css']
})
export class ListsListPageComponent implements OnInit {

  listslist$!: Observable<any>

  constructor(
    private _route: ActivatedRoute,
    private _homeService: HomeService
  ) { }
  
  ngOnInit(): void {

    // this._route.params.subscribe(
    //   params => console.log(params)
    // )

    this.listslist$ = this._route.params.pipe(
      switchMap(params => {
        console.log(params);
        return this._homeService.getListData(params['id'])
      })
    )
  }

}
