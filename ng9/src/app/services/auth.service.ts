import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  login(data: any): Observable<any> {
    return this._http.post('http://localhost:8000/api/login', data).pipe(
      tap(data => {
        localStorage.setItem('user', JSON.stringify(data))
      })
    )
  }

  getToken():string {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user.token
  }

}
