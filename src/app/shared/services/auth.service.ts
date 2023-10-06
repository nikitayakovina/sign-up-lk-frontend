import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { DeleteSession } from '../../api/open-api/models/delete-session';
import { AuthenticationService } from '../../api/open-api/services/authentication.service';

@Injectable()
export class AuthService {
  private readonly rootURL = '/api';
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  constructor(
    private http: HttpClient,
    private authorizationControlService: AuthenticationService,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('currentUser')),
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string | IUser {
    return this.currentUserSubject.value ?? localStorage.getItem('currentUser');
  }

  public register(phone: string): Observable<any> {
    return this.http.post(this.rootURL + `/authentication`, {
      phone,
    });
  }

  public handle(user: IUser) {
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  public checkUser(id: string) {}

  public logout() {
    const token = '';

    if (token) {
      this.authorizationControlService
        .apiAuthenticationDelete({
          token,
        })
        .subscribe((response: DeleteSession) => {
          if (response.success) {
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            this.router.navigate(['user', 'auth']);
          }
        });
    } else {
      this.router.navigate(['user', 'auth']);
    }
  }
}
