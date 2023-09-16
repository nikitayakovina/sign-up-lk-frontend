/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { SpecializationParametersResponse } from '../models/specialization-parameters-response';


/**
 * запрос параметров при выборе специализации
 */
@Injectable({ providedIn: 'root' })
export class RequestForSpecializationParametersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGetParamsGet()` */
  static readonly ApiGetParamsGetPath = '/api/get-params';

  /**
   * получить параметры при выборе специализации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetParamsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetParamsGet$Response(
    params?: {

    /**
     * массив цифр где 0-маникюр, 1-педикюр, 2-визажист
     */
      numbers?: Array<0 | 1 | 2>;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SpecializationParametersResponse>> {
    const rb = new RequestBuilder(this.rootUrl, RequestForSpecializationParametersService.ApiGetParamsGetPath, 'get');
    if (params) {
      rb.query('numbers', params.numbers, {"style":"form","explode":false});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SpecializationParametersResponse>;
      })
    );
  }

  /**
   * получить параметры при выборе специализации.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetParamsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetParamsGet(
    params?: {

    /**
     * массив цифр где 0-маникюр, 1-педикюр, 2-визажист
     */
      numbers?: Array<0 | 1 | 2>;
    },
    context?: HttpContext
  ): Observable<SpecializationParametersResponse> {
    return this.apiGetParamsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecializationParametersResponse>): SpecializationParametersResponse => r.body)
    );
  }

}
