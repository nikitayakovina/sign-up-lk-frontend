import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'calendar-grid-modal',
  templateUrl: './calendar-grid-modal.component.html',
  styleUrls: ['./calendar-grid-modal.component.scss'],
})
export class CalendarGridModalComponent implements OnInit {
  public x: number;
  public y: number;
  modalStyle: any = {};
  constructor(public bsModalRef: BsModalRef) {}
  ngOnInit(): void {
    console.log(this.bsModalRef);
    console.log(this.bsModalRef.content);

    // Добавляем классы в зависимости от координат
    this.modalStyle = {
      position: 'absolute',
      top: 100,
      left: 200,
    };
  }

  public closeModal(): void {
    this.bsModalRef.hide();
  }
}
