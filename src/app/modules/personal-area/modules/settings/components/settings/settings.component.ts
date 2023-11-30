import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import {Store} from "@ngxs/store";
import {AddSettings} from "../../../../../../store/actions/settings/settings.actions";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  private currentUser = this.authService.currentUserValue as string;

  public formSettings = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    workPhoneNumber: new FormControl('', Validators.required),
    address: new FormControl([''], Validators.required),
    telegram: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private personalAreaSettingsService: PersonalAreaSettingsService,
    private store: Store
  ) {}

  public ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.personalAreaSettingsService.fetchData(this.currentUser).subscribe((response) => {
      this.formSettings.setValue({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        workPhoneNumber: response.data.workPhoneNumber,
        address: response.data.address,
        telegram: response.data.telegram,
      })
    });
  }

  public submit() {
    this.personalAreaSettingsService
      .submitSettings(this.currentUser, {
        firstName: this.formSettings.controls.firstName.value,
        lastName: this.formSettings.controls.lastName.value,
        workPhoneNumber: this.formSettings.controls.workPhoneNumber.value,
        address: this.formSettings.controls.address.value,
        telegram: this.formSettings.controls.telegram.value,
      })
      .subscribe((response) => console.log(response));
  }
}
