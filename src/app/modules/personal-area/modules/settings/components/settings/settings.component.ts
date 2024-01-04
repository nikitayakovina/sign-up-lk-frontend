import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @ViewChild('cdkStepper') cdkStepper: CdkStepper;

  private currentUser = this.authService.currentUserValue as string;

  public stepsSettingsForm = new FormGroup({
    steps: new FormArray([
      new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        workPhoneNumber: new FormControl('', Validators.required),
        address: new FormControl([''], Validators.required),
        telegram: new FormControl('', Validators.required),
      }),
      new FormGroup({
        personalPhoneNumber: new FormControl('', Validators.required)
      })
    ])
  });

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
  ) {}

  public ngOnInit() {
    this.fetchData();
    console.log(this.cdkStepper)
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
