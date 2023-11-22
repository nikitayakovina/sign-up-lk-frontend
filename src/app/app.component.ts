import { Component, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from './shared/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { WebSocketService } from './shared/services/web-socket.service';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly headerPersonalArea = 'Личный кабинет';
  public loader = this.loaderService.loading$;
  constructor(
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private wsService: WebSocketService,
    private loaderService: LoaderService,
  ) {
    this.authService.redirectSubject$.subscribe((response) => {
      if (response) {
        // this.modalService.closeModal();
        this.redirect();
      }
    });
  }

  public get isOpenPersonalArea(): boolean {
    return this.router.url === '/main';
  }

  public get currentUser() {
    return this.authService.currentUserValue;
  }

  private redirect() {
    this.router.navigate(['main'], {
      relativeTo: this.route,
    });
  }

  public login(): void {
    this.router.navigate(['auth'], {
      relativeTo: this.route,
    });
  }

  public exit(): void {
    this.authService.logout();
  }

  public authorizationSuccess(value: boolean): void {
    if (value) {
      this.modalService.closeModal();
      this.router.navigate(['personal-area'], {
        relativeTo: this.route,
      });
    }
  }
}
