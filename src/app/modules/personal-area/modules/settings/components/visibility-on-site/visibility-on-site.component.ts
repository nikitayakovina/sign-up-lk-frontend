import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-visibility-on-site',
  templateUrl: './visibility-on-site.component.html',
  styleUrls: ['./visibility-on-site.component.scss'],
})
export class VisibilityOnSiteComponent {
  @Output() onSelectVisibility = new EventEmitter<any>();
  constructor() {}

  public changeStatus = (event: Event) =>
    this.onSelectVisibility.emit((<HTMLInputElement>event.target).checked);
}
