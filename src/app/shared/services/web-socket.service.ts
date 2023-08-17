import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IToken } from '../interfaces/token.interface';
import { AuthService } from './auth.service';
import { LoaderService } from './loader.service';

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

  public redirectSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public verificationSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private readonly socket: Socket,
    private authService: AuthService,
    private loaderService: LoaderService,
  ) {
    this.socket = new Socket(this.config);
    // доделать проверку если сокет уже открыт
    // if (!this.socket.ioSocket?.connected) {
    this.socket.connect();
    // }
  }

  public connect() {
    this.socket.emit('connection', {
      socket: this.socket,
    });
  }

  public emitPhone(phone: string) {
    /* Если сессия есть в базе то запрос смс кода не делаем -> сразу делаем redirect */
    this.socket.on('verificationSession', (response: any) => {
      if (response.success) {
        this.authService.handle({
          id: response.userData.id,
          token: response.userData.token,
        });

        this.redirectSubject$.next(true);
      }
    });

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

    // Вывод "Неправильный код"
    this.socket.on('verificationCode', (response: any) => {
      if (!response.success) {
        this.verificationSubject$.next(false);
        this.loaderService.finish();
      }
    });

    this.socket.on('authToken', (response: IToken) => {
      if (response.success && response.userData) {
        this.authService.handle({
          id: response.userData.id,
          token: response.userData.token,
        });
        this.redirectSubject$.next(true);
      } else {
        this.redirectSubject$.next(false);
      }

      this.loaderService.finish();
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
    // почитать про дисконект сокетов
    // this.socket.disconnect();
    // this.socket.removeAllListeners();

    this.redirectSubject$.next(null);
  }
}
