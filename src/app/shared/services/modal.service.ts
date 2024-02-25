import { Injectable, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class ModalService {
  private modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(component: any, initialState?: any, event?: MouseEvent): void {
    this.modalRef = this.modalService.show(component, {
      initialState,
      backdrop: 'static', // изменено на 'static' для отключения закрытия по клику вне окна
      class: 'custom-modal', // добавляем класс стилей для позиционирования
      // container: 'body', // размещаем модальное окно в body, чтобы избежать проблем с позиционированием
    });
    // this.modalRef.setClass(initialState);
    // Устанавливаем позицию модального окна
    // this.modalRef.location.nativeElement.style.position = 'absolute';
    // this.modalRef.location.nativeElement.style.top = event.clientY + 'px';
    // this.modalRef.location.nativeElement.style.left = event.clientX + 'px';
  }

  public closeModal(): void {
    this.modalRef.hide();
  }
}
