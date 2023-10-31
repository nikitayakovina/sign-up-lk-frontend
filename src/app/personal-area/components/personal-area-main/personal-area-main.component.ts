import { Component } from '@angular/core';
import { IWidgets } from '../../../shared/interfaces/widgets.interface';
import { ItemsMenuEnum } from '../../enums/personal-area.enum';
import { ActivatedRoute, Router } from '@angular/router';

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

  public itemsMenu = [
    {
      title: 'Главная',
      id: ItemsMenuEnum.main,
    },
    {
      title: 'Настройки',
      id: ItemsMenuEnum.settings,
    },
    {
      title: 'Календарь',
      id: ItemsMenuEnum.calendar,
    },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  public redirect() {
    this.router.navigate(['./calendar'], {
      relativeTo: this.route,
      skipLocationChange: true,
    });
    // this.router.navigate(['calendar'], {
    //   relativeTo: this.route,
    // });
  }

  protected readonly ItemsMenuEnum = ItemsMenuEnum;
}
