import { Component, Input } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { IWidgets } from '../../shared/interfaces/widgets.interface';
import { Widget } from '../../shared/models/widget';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent {
  public defaultWidgets = new Widget();
  @Input() public widgets: IWidgets[];
  constructor(public modalService: ModalService) {}

  public addWidget(widget: IWidgets): void {
    this.widgets.push(widget);
    this.modalService.closeModal();
  }
  public removeWidget(widget: IWidgets): void {
    const index = this.widgets.indexOf(widget);
    this.widgets.splice(index, 1);
  }
}
