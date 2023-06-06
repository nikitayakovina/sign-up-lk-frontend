import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly rootURL = '/api';
  constructor(private http: HttpClient) {}

  public register(phone: string): Observable<any> {
    return this.http.post(this.rootURL + `/authentication`, {
      phone,
    });
  }
}
