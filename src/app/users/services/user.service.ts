import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../interfaces/iusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_base = "https://jsonplaceholder.typicode.com/users"

  constructor(private _http: HttpClient) { }

  getAll(): Observable<Iuser[]>{
    return this._http.get<Iuser[]>(this.url_base);
  }

  get(): Observable<Iuser>{
    return this._http.get<Iuser>(this.url_base + "1");
  }
}
