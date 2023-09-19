import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import { IUser } from '../../../../shared/interfaces/user.interface';
import { logMessages } from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

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
  constructor(
    private authService: AuthService,
    private personalAreaSettingsService: PersonalAreaSettingsService,
  ) {}

  public submit() {
    const currentUser = this.authService.currentUserValue as IUser;

    this.personalAreaSettingsService
      .submitSettings({
        userId: currentUser.id,
        searchServiceUserData: {
          workPhoneNumber: '12312312',
        },
      })
      .subscribe((response) => console.log(response));
  }
}
