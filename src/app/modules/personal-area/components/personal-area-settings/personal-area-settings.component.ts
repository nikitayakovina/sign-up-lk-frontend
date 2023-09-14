import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-area-settings',
  templateUrl: './personal-area-settings.component.html',
  styleUrls: ['./personal-area-settings.component.css'],
})
export class PersonalAreaSettingsComponent {
  public formSettings = new FormGroup({
    fio: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
}
