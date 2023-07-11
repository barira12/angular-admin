import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {


   }
   login (data: any):Observable<any>{
    return this.http.post(`${environment.api}/login`, data);
   }
   register (data: any):Observable<any>{
    return this.http.post(`${environment.api}/register`, data,{
      withCredentials:true
    });
   }

   user():Observable<any>{
    return this.http.get(`${environment.api}/user`);
   }

   logout(): Observable<void>{
    return this.http.post<void>(`${environment.api}/logout`,{});

   }
   updateInfo(data: any):Observable<any>{
    return this.http.put(`${environment.api}/users/info`,data);
   }

   updatePassword(data: any):Observable<any>{
    return this.http.put(`${environment.api}/users/password`,data);
   }
}
