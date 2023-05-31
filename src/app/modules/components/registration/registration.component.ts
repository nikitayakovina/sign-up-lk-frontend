import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  public form = new FormGroup({
    email: new FormControl('', Validators.required),
    fio: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

  public onSubmit() {}
}
