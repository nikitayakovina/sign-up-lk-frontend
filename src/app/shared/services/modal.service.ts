import { Injectable, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class ModalService {
  private modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(modal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modal);
  }

  public closeModal(): void {
    this.modalRef.hide();
  }
}
