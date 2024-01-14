import { Injectable } from '@angular/core';
import { RequestForSpecializationParametersService } from '../../../../../api/open-api/services/request-for-specialization-parameters.service';
import { Observable } from 'rxjs';
import { SpecializationParametersResponse } from '../../../../../api/open-api/models/specialization-parameters-response';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  constructor(private parametersService: RequestForSpecializationParametersService) {}

  public fetchParams(): Observable<SpecializationParametersResponse> {
    return this.parametersService.apiGetParamsGet();
  }
}
