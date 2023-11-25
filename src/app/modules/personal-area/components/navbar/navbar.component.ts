import { Component } from '@angular/core';
import { NavbarEnum } from '../../../../shared/enums/navbar.enum';

export interface INavbarItems {
  title: string;
  id: NavbarEnum;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public itemsNavbar: INavbarItems[] = [
    {
      title: 'Главная',
      id: NavbarEnum.main,
    },
    {
      title: 'Настройки',
      id: NavbarEnum.settings,
    },
    {
      title: 'Календарь',
      id: NavbarEnum.calendar,
    },
  ];

  constructor() {}
}
