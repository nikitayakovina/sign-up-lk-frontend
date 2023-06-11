import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../common/services/auth.service';
import { WebSocketService } from '../../../common/services/web-socket.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnDestroy {
  private readonly code: string = '+7';
  public isFocused = false;
  public form = new FormGroup({
    phone: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private wsService: WebSocketService) {
    this.wsService.connect();
  }

  public onSubmit() {
    const phone = `${this.code}${this.form.value.phone}`;

    this.authService.register(phone).subscribe(
      () => {
        this.wsService.emitPhone(phone);
      },
      (error) => console.log(error),
    );
  }

  public onFocus = () => (this.isFocused = true);

  public onBlur = () => (this.isFocused = false);

  public ngOnDestroy() {
    this.wsService.destroy();
  }
}
