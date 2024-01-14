import { Component } from '@angular/core';
import { IServicesInterface } from '../../../../../../shared/interfaces';
import { ModalService } from '../../../../../../shared/services/modal.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  public services: IServicesInterface[] = [];
  constructor(public modalService: ModalService) {}
}
