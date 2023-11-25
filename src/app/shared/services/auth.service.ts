import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { DeleteSession } from '../../api/open-api/models/delete-session';
import { AuthenticationService } from '../../api/open-api/services/authentication.service';

@Injectable()
export class AuthService {
  private readonly rootURL = '/api';
  private currentUserSubject: BehaviorSubject<string>;

  public currentUser: Observable<string>;
  constructor(
    private http: HttpClient,
    private authorizationControlService: AuthenticationService,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<string>(
      JSON.parse(localStorage.getItem('currentUser')),
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    return this.currentUserSubject.value ?? localStorage.getItem('currentUser');
  }

  public handle(token: string) {
    this.currentUserSubject.next(token);
    localStorage.setItem('currentUser', JSON.stringify(token));
  }

  public logout() {
    this.authorizationControlService
      .apiAuthenticationDelete({
        token: this.currentUserValue,
      })
      .subscribe((response: DeleteSession) => {
        if (response.success) {
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
          this.router.navigate(['']);
        }
      });
  }

  public sendMessage(phone: string) {
    return this.authorizationControlService
      .apiAuthenticationSendMessagePost({
        'phone-number': phone,
      })
      .pipe(tap((response) => {}));
  }

  public checkMessage(phone: string, code: string) {
    return this.authorizationControlService.apiAuthenticationCheckMessagePost({
      'phone-number': phone,
      'verification-code': code,
    });
  }
}
