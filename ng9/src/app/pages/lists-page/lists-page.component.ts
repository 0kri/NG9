import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { Home, HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {

  public lists$!: Observable<any>

  constructor(
    public _homeService: HomeService
  ) { }
  
  ngOnInit(): void {

    this.lists$ = this._homeService.getHomeData( )
    
  }

}
