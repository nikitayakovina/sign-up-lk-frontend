import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
  });

  submit() {
      if (this.form.valid) {

      }
  }
}
