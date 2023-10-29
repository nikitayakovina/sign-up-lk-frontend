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

import { CheckMessageCode } from '../models/check-message-code';
import { DeleteSession } from '../models/delete-session';


/**
 * управление авторизацией клиента
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAuthenticationSendMessagePost()` */
  static readonly ApiAuthenticationSendMessagePostPath = '/api/authentication/send-message';

  /**
   * отправка проверочного кода.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationSendMessagePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationSendMessagePost$Response(
    params: {

    /**
     * номер телефона клиента
     */
      'phone-number': string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<{

/**
 * успешно ли выполнен запрос
 */
'success'?: boolean;
'data'?: any;
}>> {
    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthenticationSendMessagePostPath, 'post');
    if (params) {
      rb.header('phone-number', params['phone-number'], {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        
        /**
         * успешно ли выполнен запрос
         */
        'success'?: boolean;
        'data'?: any;
        }>;
      })
    );
  }

  /**
   * отправка проверочного кода.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationSendMessagePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationSendMessagePost(
    params: {

    /**
     * номер телефона клиента
     */
      'phone-number': string;
    },
    context?: HttpContext
  ): Observable<{

/**
 * успешно ли выполнен запрос
 */
'success'?: boolean;
'data'?: any;
}> {
    return this.apiAuthenticationSendMessagePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{

/**
 * успешно ли выполнен запрос
 */
'success'?: boolean;
'data'?: any;
}>): {

/**
 * успешно ли выполнен запрос
 */
'success'?: boolean;
'data'?: any;
} => r.body)
    );
  }

  /** Path part for operation `apiAuthenticationCheckMessagePost()` */
  static readonly ApiAuthenticationCheckMessagePostPath = '/api/authentication/check-message';

  /**
   * проверка введенного кода.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationCheckMessagePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationCheckMessagePost$Response(
    params: {

    /**
     * номер телефона клиента
     */
      'phone-number': string;

    /**
     * введенный код верификации
     */
      'verification-code': string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CheckMessageCode>> {
    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthenticationCheckMessagePostPath, 'post');
    if (params) {
      rb.header('phone-number', params['phone-number'], {});
      rb.header('verification-code', params['verification-code'], {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CheckMessageCode>;
      })
    );
  }

  /**
   * проверка введенного кода.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAuthenticationCheckMessagePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationCheckMessagePost(
    params: {

    /**
     * номер телефона клиента
     */
      'phone-number': string;

    /**
     * введенный код верификации
     */
      'verification-code': string;
    },
    context?: HttpContext
  ): Observable<CheckMessageCode> {
    return this.apiAuthenticationCheckMessagePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CheckMessageCode>): CheckMessageCode => r.body)
    );
  }

  /** Path part for operation `apiAuthenticationDelete()` */
  static readonly ApiAuthenticationDeletePath = '/api/authentication/';

  /**
   * запрос на удаление авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthenticationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationDelete$Response(
    params: {
      token: any;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<DeleteSession>> {
    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ApiAuthenticationDeletePath, 'delete');
    if (params) {
      rb.header('token', params.token, {});
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
   * To access the full response (for headers, for example), `apiAuthenticationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthenticationDelete(
    params: {
      token: any;
    },
    context?: HttpContext
  ): Observable<DeleteSession> {
    return this.apiAuthenticationDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeleteSession>): DeleteSession => r.body)
    );
  }

}
