import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';

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

  constructor(private socket: Socket) {}

  public connect() {
    this.socket = new Socket(this.config);
    this.socket.connect();

    this.socket.emit('connection', {
      socket: this.socket,
    });
  }

  public emitPhone(phone: string) {
    // @ts-ignore
    this.socket.on('phoneProcessed', (response) => {
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
