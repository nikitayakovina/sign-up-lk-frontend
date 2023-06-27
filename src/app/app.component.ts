import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public redirect() {
    this.router.navigate(['personal-area'], {
      relativeTo: this.route,
    });
  }
}
