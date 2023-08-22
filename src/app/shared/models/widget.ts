import { IWidgets } from '../interfaces/widgets.interface';

export class Widget {
  private _widgets: IWidgets[] = [
    {
      id: 1,
      name: 'Тест1',
    },
    {
      id: 2,
      name: 'Тест2',
    },
    {
      id: 3,
      name: 'Тест3',
    },
  ];
  constructor() {}

  public get widgets() {
    return this._widgets;
  }
}
