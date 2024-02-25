import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../../../shared/services/modal.service';
import { Store } from '@ngxs/store';
import { SettingsState } from '../../../../../../store/states/settings/settings.state';
import { ISettingsAdd } from '../../../../../../store/actions/settings/settings.actions';

export enum ModeEnum {
  view = 'view',
  add = 'add',
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public services: ISettingsAdd[] = [];
  public mode: ModeEnum = ModeEnum.add;
  public selectedService: ISettingsAdd;
  constructor(public modalService: ModalService, private store: Store) {}

  ngOnInit() {
    this.store.select(SettingsState.getSettings).subscribe((settings: ISettingsAdd[]) => {
      this.services = settings;
    });
  }

  openService(service: ISettingsAdd) {
    this.selectedService = service;
    this.mode = ModeEnum.view;
  }

  protected readonly ModeEnum = ModeEnum;
}
