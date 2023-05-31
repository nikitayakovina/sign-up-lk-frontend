import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly rootURL = '/api';
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this.http.post('', {
      email,
      password,
    });
  }

  public register(email: string, fio: string, password: string): Observable<any> {
    return this.http.post('', {
      email,
      fio,
      password,
    });
  }
}
