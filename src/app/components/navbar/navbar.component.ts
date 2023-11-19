import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarEnum } from '../../shared/enums/navbar.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public itemsNavbar = [
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

  constructor(public router: Router, private route: ActivatedRoute) {}

  public select(id: string) {
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
