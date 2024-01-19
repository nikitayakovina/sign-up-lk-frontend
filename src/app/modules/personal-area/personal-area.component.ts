import { Component } from '@angular/core';
import { NavbarEnum } from '../../shared/enums/navbar.enum';
import { INavbarItems } from './interfaces/navbar.interface';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss'],
})
export class PersonalAreaComponent {
  public itemsNavbar: INavbarItems[] = [
    {
      title: 'Главная',
      id: NavbarEnum.main,
    },
    {
      title: 'Настройки',
      id: NavbarEnum.settings,
      children: [
        {
          title: 'Персональные настройки',
          id: NavbarEnum.personalSettings,
        },
        {
          title: 'Настройки рассылок',
          id: NavbarEnum.mailSettings,
        },
      ],
    },
    {
      title: 'Календарь',
      id: NavbarEnum.calendar,
    },
    {
      title: 'Аналитика',
      id: NavbarEnum.analyze,
    },
  ];
}
