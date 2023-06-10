import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  config: SocketIoConfig = {
    url: environment.url,
    options: {
      autoConnect: false,
    },
  };

  constructor(private socket: Socket) {}

  public connect() {
    this.socket = new Socket(this.config);
    this.socket.connect();

    // @ts-ignore
    this.socket.on('connection', (value) => {
      console.log(value);
    });
  }

  public emitPhone(phone: string) {
    this.socket.emit('phone', {
      phone,
    });
  }

  public destroy() {
    this.socket.disconnect();
    this.socket.removeAllListeners();
  }
}
