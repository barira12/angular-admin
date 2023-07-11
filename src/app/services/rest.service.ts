import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {
  
  abstract get endpoint(): string;

  constructor(protected http:HttpClient) { }
  all(page? :number):Observable<any>{
    let url = this.endpoint;

    if(page){
      url +=`?page=${page}`
    }
    return this.http.get(url)

  }

  create(data: any):Observable<any>{
    return this.http.post(this.endpoint, data);

  }
  get (_id:number):Observable<any>{
    return this.http.get(`${this.endpoint}/${_id}`)
  }

  update(_id: number,body:any):Observable<any>{
    return this.http.put(`${this.endpoint}/${_id}`,body)
  }
  delete(_id:number):Observable<void>{
    return this.http.delete<void>(`${environment.api}/${_id}`)

  }
  
}
