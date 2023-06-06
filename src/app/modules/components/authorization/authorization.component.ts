import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../common/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  public isFocused = false;
  public form = new FormGroup({
    phone: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  public onSubmit() {
    this.authService.register('+79618833873').subscribe(
      (next) => {
        alert(next);
      },
      (error) => alert(error),
    );
  }

  public onFocus = () => (this.isFocused = true);

  public onBlur = () => (this.isFocused = false);
}
