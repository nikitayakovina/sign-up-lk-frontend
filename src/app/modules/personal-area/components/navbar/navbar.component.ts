import { Component, Input } from '@angular/core';
import { INavbarItems } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() public item: INavbarItems;
  public isExpanded: boolean = false;

  constructor() {}

  public onItemSelected(item: INavbarItems, event?: Event) {
    if (item.children && item.children.length) {
      this.isExpanded = !this.isExpanded;
    }
  }
}
