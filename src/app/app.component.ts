import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalService } from './shared/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { LoaderService } from './shared/services/loader.service';

interface IRouterLink {
  title: string;
  route: string;
  hidden?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loader = this.loaderService.loading$;
  public readonly routerLink: IRouterLink[] = [
    {
      title: 'Главная',
      route: 'main',
    },
    {
      title: 'Журнал',
      route: 'journal',
    },
    {
      title: 'Личный кабинет',
      route: '/personal-area',
      hidden: !this.currentUser,
    },
  ];

  constructor(
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
  ) {}

  public get currentUser() {
    return this.authService.currentUserValue;
  }

  public exit(): void {
    this.authService.logout();
    this.cdr.detectChanges();
  }

  public authorizationSuccess(value: boolean): void {
    if (value) {
      this.modalService.closeModal();
      this.router.navigate(['personal-area'], {
        relativeTo: this.route,
      });

      this.cdr.detectChanges();
    }
  }
}
