import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

export interface Home {
  categories: Category[];
  reviews: any[],
  blogs: any[],
  lastBlogs: any[]
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  public getHomeData(): Observable<Category> {
    return this._http.get<Category>('http://localhost:8000/api/categories')
  }

  getListData(id: string | number): Observable<any> {
    return this._http.get(`http://localhost:8000/api/courses/${id}`)
  }

}
