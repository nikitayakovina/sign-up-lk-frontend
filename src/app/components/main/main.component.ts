import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../shared/services/modal.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public readonly headerPersonalArea = 'Личный кабинет';
  constructor(
    public modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  public get isOpenPersonalArea(): boolean {
    return this.router.url === '/personal-area';
  }

  private redirect() {
    this.router.navigate(['personal-area'], {
      relativeTo: this.route,
    });
  }

  public authorizationChange(value: boolean) {
    if (value) {
      this.redirect();
      this.modalService.closeModal();
    } else {
      alert('Ошибка входа');
    }
  }

  public exit(): void {
    this.authService.logout();
    this.router.navigate([''], {
      relativeTo: this.route,
    });
  }
}
