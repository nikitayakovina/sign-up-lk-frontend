import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  private redirect() {
    this.router.navigate(['personal-area'], {
      relativeTo: this.route,
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public authorizationChange(value: boolean) {
    if (value) {
      this.modalRef.hide();
      this.redirect();
    }
  }
}
