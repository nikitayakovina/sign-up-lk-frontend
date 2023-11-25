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

import { GetSearchServiceSettingsResponse } from '../models/get-search-service-settings-response';
import { PostSearchServiceSettingsRequest } from '../models/post-search-service-settings-request';


/**
 * данные пользователя
 */
@Injectable({ providedIn: 'root' })
export class SettingsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSettingsSearchServiceGet()` */
  static readonly ApiSettingsSearchServiceGetPath = '/api/settings/search-service';

  /**
   * получение данных пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSettingsSearchServiceGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSettingsSearchServiceGet$Response(
    params: {
      token: any;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<GetSearchServiceSettingsResponse>> {
    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsSearchServiceGetPath, 'get');
    if (params) {
      rb.header('token', params.token, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetSearchServiceSettingsResponse>;
      })
    );
  }

  /**
   * получение данных пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSettingsSearchServiceGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSettingsSearchServiceGet(
    params: {
      token: any;
    },
    context?: HttpContext
  ): Observable<GetSearchServiceSettingsResponse> {
    return this.apiSettingsSearchServiceGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSearchServiceSettingsResponse>): GetSearchServiceSettingsResponse => r.body)
    );
  }

  /** Path part for operation `apiSettingsSearchServicePost()` */
  static readonly ApiSettingsSearchServicePostPath = '/api/settings/search-service';

  /**
   * добавление данных пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSettingsSearchServicePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSettingsSearchServicePost$Response(
    params: {

    /**
     * Токен авторизации пользователя
     */
      token: any;
      body: PostSearchServiceSettingsRequest
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsSearchServicePostPath, 'post');
    if (params) {
      rb.header('token', params.token, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * добавление данных пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSettingsSearchServicePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSettingsSearchServicePost(
    params: {

    /**
     * Токен авторизации пользователя
     */
      token: any;
      body: PostSearchServiceSettingsRequest
    },
    context?: HttpContext
  ): Observable<any> {
    return this.apiSettingsSearchServicePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
