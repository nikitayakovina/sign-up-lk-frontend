import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { IToken } from '../interfaces/token.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private storage: boolean;
  private subject: Subject<boolean> = new Subject<boolean>();

  private readonly config: SocketIoConfig = {
    url: environment.url,
    options: {
      autoConnect: false,
    },
  };

  constructor(private readonly socket: Socket, private authService: AuthService) {
    this.socket = new Socket(this.config);
    this.destroy();
    this.socket.connect();
  }

  public connect() {
    this.socket.emit('connection', {
      socket: this.socket,
    });
  }

  public emitPhone(phone: string) {
    this.socket.on('authenticationProcess', (response: any) => {
      // тут сразу делать запуск таймера
      this.handle(response.success);
    });
    this.socket.emit('phone', {
      phone,
    });
  }

  public emitCode(code: string) {
    this.socket.emit('verificationCode', {
      code,
    });

    return new Observable((result) => {
      this.socket.on('authToken', (response: IToken) => {
        if (response.success && response.userData) {
          this.authService.handle({
            id: response.userData.id,
            token: response.userData.token,
          });
          result.next(true);
        } else {
          result.next(false);
        }
      });
    });
  }

  public handle = (value: boolean) => {
    this.storage = value;
    this.subject.next(this.storage);
  };

  public reset() {
    this.subject.next(false);
    this.storage = null;
  }

  public get asObservable(): Observable<boolean> {
    return this.subject.asObservable();
  }

  public destroy() {
    this.socket.disconnect();
    this.socket.removeAllListeners();
  }
}
