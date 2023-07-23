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

import { Delete } from '../models/delete';

@Injectable({ providedIn: 'root' })
export class DeleteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthorizationControlDeleteDelete()` */
  static readonly ApiAuthorizationControlDeleteDeletePath = 'api/authorization-control/delete';

  /**
   * запросна удаление авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthorizationControlDeleteDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthorizationControlDeleteDelete$Response(
    params: {
      body: {
'id': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Delete>> {
    const rb = new RequestBuilder(this.rootUrl, DeleteService.ApiAuthorizationControlDeleteDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Delete>;
      })
    );
  }

  /**
   * запросна удаление авторизации.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthorizationControlDeleteDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthorizationControlDeleteDelete(
    params: {
      body: {
'id': string;
}
    },
    context?: HttpContext
  ): Observable<Delete> {
    return this.apiAuthorizationControlDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<Delete>): Delete => r.body)
    );
  }

}
