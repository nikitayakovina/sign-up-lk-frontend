import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import { IUser } from '../../../../shared/interfaces/user.interface';
import { GetSearchServiceSettingsResponse } from '../../../../api/open-api/models/get-search-service-settings-response';

@Component({
  selector: 'app-personal-area-settings',
  templateUrl: './personal-area-settings.component.html',
  styleUrls: ['./personal-area-settings.component.css'],
})
export class PersonalAreaSettingsComponent implements OnInit {
  private currentUser = this.authService.currentUserValue as IUser;

  public userSettings: GetSearchServiceSettingsResponse;

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
    this.personalAreaSettingsService.fetchData(this.currentUser.id).subscribe((response) => {
      this.userSettings = response;
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
