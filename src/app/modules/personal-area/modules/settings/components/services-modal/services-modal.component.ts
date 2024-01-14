import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParametersService } from '../../services/parameters.service';
import { SpecializationParametersResponse } from '../../../../../../api/open-api/models/specialization-parameters-response';
import { ServiceItem } from '../../../../../../api/open-api/models/service-item';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.css'],
})
export class ServicesModalComponent implements OnInit {
  public formService = new FormGroup({
    service: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  public services: ServiceItem[] = [];
  constructor(private parametersService: ParametersService) {}

  ngOnInit() {
    this.parametersService.fetchParams().subscribe((response: SpecializationParametersResponse) => {
      this.services = response.msg;
    });
  }

  public onSubmit() {}
}
