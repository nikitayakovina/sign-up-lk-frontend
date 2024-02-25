import { Injectable } from '@angular/core';
import { RequestForSpecializationParametersService } from '../../../../../api/open-api/services/request-for-specialization-parameters.service';
import { Observable } from 'rxjs';
import { SpecializationParametersResponse } from '../../../../../api/open-api/models/specialization-parameters-response';
import { AuthService } from '../../../../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  constructor(
    private parametersService: RequestForSpecializationParametersService,
    private authService: AuthService,
  ) {}

  public fetchParams(params?: Array<0 | 1 | 2>): Observable<SpecializationParametersResponse> {
    const token = this.authService.currentUserValue;
    return this.parametersService.apiGetParamsGet({
      token,
      params: params?.length ? params : [0, 1, 2],
    });
  }
}
