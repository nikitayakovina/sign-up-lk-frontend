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

import { AuthorizationOntrol } from '../models/authorization-ontrol';
import { DeleteSession } from '../models/delete-session';


/**
 * проверить/удалить авторизацию пользователя
 */
@Injectable({ providedIn: 'root' })
export class AuthorizationControlService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthorizationControlGet()` */
  static readonly ApiAuthorizationControlGetPath = 'api/authorization-control/';

  /**
   * запрос к бд для проверки авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthorizationControlGet$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthorizationControlGet$Json$Response(
    params: {
      body: {
'id': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AuthorizationOntrol>> {
    const rb = new RequestBuilder(this.rootUrl, AuthorizationControlService.ApiAuthorizationControlGetPath, 'get');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthorizationOntrol>;
      })
    );
  }

  /**
   * запрос к бд для проверки авторизации.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthorizationControlGet$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthorizationControlGet$Json(
    params: {
      body: {
'id': string;
}
    },
    context?: HttpContext
  ): Observable<AuthorizationOntrol> {
    return this.apiAuthorizationControlGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthorizationOntrol>): AuthorizationOntrol => r.body)
    );
  }

  /**
   * запрос к бд для проверки авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthorizationControlGet$Description()` instead.
   *
   * This method sends `description` and handles request body of type `description`.
   */
  apiAuthorizationControlGet$Description$Response(
    params: {
      body: any
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AuthorizationOntrol>> {
    const rb = new RequestBuilder(this.rootUrl, AuthorizationControlService.ApiAuthorizationControlGetPath, 'get');
    if (params) {
      rb.body(params.body, 'description');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthorizationOntrol>;
      })
    );
  }

  /**
   * запрос к бд для проверки авторизации.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthorizationControlGet$Description$Response()` instead.
   *
   * This method sends `description` and handles request body of type `description`.
   */
  apiAuthorizationControlGet$Description(
    params: {
      body: any
    },
    context?: HttpContext
  ): Observable<AuthorizationOntrol> {
    return this.apiAuthorizationControlGet$Description$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthorizationOntrol>): AuthorizationOntrol => r.body)
    );
  }

  /** Path part for operation `apiAuthorizationControlDelete()` */
  static readonly ApiAuthorizationControlDeletePath = '/api/authorization-control/';

  /**
   * запрос на удаление авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthorizationControlDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthorizationControlDelete$Response(
    params: {
      body: {
'id': string;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<DeleteSession>> {
    const rb = new RequestBuilder(this.rootUrl, AuthorizationControlService.ApiAuthorizationControlDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeleteSession>;
      })
    );
  }

  /**
   * запрос на удаление авторизации.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthorizationControlDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAuthorizationControlDelete(
    params: {
      body: {
'id': string;
}
    },
    context?: HttpContext
  ): Observable<DeleteSession> {
    return this.apiAuthorizationControlDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteSession>): DeleteSession => r.body)
    );
  }

}
