import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import { IUser } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-personal-area-settings',
  templateUrl: './personal-area-settings.component.html',
  styleUrls: ['./personal-area-settings.component.css'],
})
export class PersonalAreaSettingsComponent implements OnInit {
  private currentUser = this.authService.currentUserValue as IUser;

  public formSettings = new FormGroup({
    fio: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private personalAreaSettingsService: PersonalAreaSettingsService,
  ) {}

  public ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.personalAreaSettingsService.fetchData(this.currentUser.id).subscribe((result) => {
      console.log(result);
    });
  }

  public submit() {
    this.personalAreaSettingsService
      .submitSettings({
        userId: this.currentUser.id,
        searchServiceUserData: {
          workPhoneNumber: '12312312',
        },
      })
      .subscribe((response) => console.log(response));
  }
}
