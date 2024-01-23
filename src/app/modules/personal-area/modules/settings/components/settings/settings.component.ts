import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../../../shared/services/auth.service';
import { PersonalAreaSettingsService } from '../../services/personal-area-settings.service';
import { CdkStepper } from '@angular/cdk/stepper';
import { ParametersService } from '../../services/parameters.service';
import { map } from 'rxjs/operators';

export interface IBasicService {
  id: number;
  title: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @ViewChild('cdkStepper') cdkSteppercdkStepper: CdkStepper;

  private currentUser = this.authService.currentUserValue as string;

  public stepsSettingsForm = new FormGroup({
    personalData: new FormGroup({
      activeAccount: new FormControl(false, Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      workPhoneNumber: new FormControl('', Validators.required),
      address: new FormControl([''], Validators.required),
      telegram: new FormControl('123', Validators.required),
    }),
    services: new FormGroup({
      userServices: new FormArray([
        new FormControl('', Validators.required),
        new FormControl('', Validators.required),
      ]),
    }),
  });

  public basicServices: IBasicService[] = [];
  public selectedBasicServices: IBasicService[] = [];

  public isPublishedSearch: boolean = false;

  constructor(
    private authService: AuthService,
    private personalAreaSettingsService: PersonalAreaSettingsService,
    private parametersService: ParametersService,
  ) {}

  public ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.personalAreaSettingsService.fetchData(this.currentUser).subscribe((response) => {
      this.stepsSettingsForm.controls.personalData.setValue({
        activeAccount: response.data.activeAccount,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        workPhoneNumber: response.data.workPhoneNumber,
        address: response.data.address,
        telegram: response.data.telegram,
      });
    });
  }

  public submit() {
    if (this.isPublishedSearch) {
      this.cdkSteppercdkStepper.next();
      return;
    }

    this.personalAreaSettingsService
      .submitSettings(this.currentUser, {
        activeAccount: true,
        socialNetwork: [],
        userServices: [],
        additionalServices: [],
        whatsapp: '123',
        firstName: this.stepsSettingsForm.controls.personalData.controls.firstName.value,
        lastName: this.stepsSettingsForm.controls.personalData.controls.lastName.value,
        workPhoneNumber:
          this.stepsSettingsForm.controls.personalData.controls.workPhoneNumber.value,
        address: this.stepsSettingsForm.controls.personalData.controls.address.value,
        telegram: this.stepsSettingsForm.controls.personalData.controls.telegram.value,
      })
      .subscribe((response) => console.log(response));
  }

  public onSelectVisibility($event: boolean) {
    this.stepsSettingsForm.controls.personalData.controls.activeAccount.setValue($event);

    if (!$event) {
      // this.basicServices = [];
      this.isPublishedSearch = false;

      return;
    }

    this.isPublishedSearch = true;

    // this.parametersService
    //   .fetchParams()
    //   .pipe(
    //     map((services) =>
    //       services.msg.map((service, index) => {
    //         return { id: index, title: service.service };
    //       }),
    //     ),
    //   )
    //   .subscribe((services: IBasicService[]) => {
    //     this.basicServices = services;
    //   });
  }

  public changeBasicService(item: IBasicService) {
    const index = this.selectedBasicServices.indexOf(item);

    if (index !== -1) {
      this.selectedBasicServices.splice(index, 1);
    } else {
      this.selectedBasicServices.push(item);
    }
  }
}
