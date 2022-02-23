import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) {}


  getUsers(){
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

}
