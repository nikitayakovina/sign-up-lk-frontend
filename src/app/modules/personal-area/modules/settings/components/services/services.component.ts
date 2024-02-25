import { Component, Input, OnInit } from '@angular/core';
import { IServicesInterface } from '../../../../../../shared/interfaces';
import { ModalService } from '../../../../../../shared/services/modal.service';
import { IBasicService } from '../settings/settings.component';
import { ParametersService } from '../../services/parameters.service';
import { Store } from '@ngxs/store';
import { AddSettings } from '../../../../../../store/actions/settings/settings.actions';
import { SettingsState } from '../../../../../../store/states/settings/settings.state';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public services: IServicesInterface[] = [];
  constructor(public modalService: ModalService, private store: Store) {}

  ngOnInit() {
    this.store.select(SettingsState.getSettings).subscribe((res) => console.log(res));
  }

  public fetchParams() {
    // this.parametersService.fetchParams(this.selectedBasicServices.map((service) => service.id));
  }
}
