import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginForm, RegisterForm, User } from '../../types/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:3000/auth';
  http = inject(HttpClient);

  constructor() {}
  getAllAuth(){
    return this.http.get<User[]>(this.apiUrl);
  }

  register(data: RegisterForm) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: LoginForm) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
