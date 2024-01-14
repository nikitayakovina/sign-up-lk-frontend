import { NavbarEnum } from '../../../shared/enums/navbar.enum';

export interface INavbarItems {
  id: NavbarEnum;
  title: string;
  icon?: string;
  children?: INavbarItems[];
}
