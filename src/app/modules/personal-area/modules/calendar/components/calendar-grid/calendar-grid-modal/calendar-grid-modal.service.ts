import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(component: any, data: any): void {
    const initialState = {
      data: data,
    };
    this.modalRef = this.modalService.show(component, { initialState });
  }
}
