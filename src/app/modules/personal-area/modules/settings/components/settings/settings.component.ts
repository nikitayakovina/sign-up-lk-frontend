import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import { GetSearchServiceSettingsResponse } from '../../../../../../api/open-api/models/get-search-service-settings-response';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  private currentUser = this.authService.currentUserValue as string;

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
    this.personalAreaSettingsService.fetchData(this.currentUser).subscribe((response) => {
      this.userSettings = response;
    });
  }

  public submit() {
    this.personalAreaSettingsService
      .submitSettings(this.currentUser, {
        workPhoneNumber: '113333333',
      })
      .subscribe((response) => console.log(response));
  }
}
