import { Component } from '@angular/core';
import { IWidgets } from '../../../../shared/interfaces/widgets.interface';

@Component({
  selector: 'app-personal-area-main',
  templateUrl: './personal-area-main.component.html',
  styleUrls: ['./personal-area-main.component.scss'],
})
export class PersonalAreaMainComponent {
  public widgets: IWidgets[] = [
    {
      id: 1,
      name: 'Тест1',
    },
    {
      id: 2,
      name: 'Тест2',
    },
  ];
  constructor() {}
}
