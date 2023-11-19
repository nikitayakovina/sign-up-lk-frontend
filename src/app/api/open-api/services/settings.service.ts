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
import { PostSearchServiceSettingsResponse } from '../models/post-search-service-settings-response';
import { UpdateUserDataRequest } from '../models/update-user-data-request';
import { UpdateUserDataResponse } from '../models/update-user-data-response';


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
   * получение данных пользователя по ID.
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

    /**
     * id пользователя
     */
      userId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<GetSearchServiceSettingsResponse>> {
    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsSearchServiceGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
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
   * получение данных пользователя по ID.
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

    /**
     * id пользователя
     */
      userId: string;
    },
    context?: HttpContext
  ): Observable<GetSearchServiceSettingsResponse> {
    return this.apiSettingsSearchServiceGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetSearchServiceSettingsResponse>): GetSearchServiceSettingsResponse => r.body)
    );
  }

  /** Path part for operation `apiSettingsSearchServicePut()` */
  static readonly ApiSettingsSearchServicePutPath = '/api/settings/search-service';

  /**
   * обновление данных пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSettingsSearchServicePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSettingsSearchServicePut$Response(
    params: {
      body: UpdateUserDataRequest
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UpdateUserDataResponse>> {
    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsSearchServicePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UpdateUserDataResponse>;
      })
    );
  }

  /**
   * обновление данных пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSettingsSearchServicePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiSettingsSearchServicePut(
    params: {
      body: UpdateUserDataRequest
    },
    context?: HttpContext
  ): Observable<UpdateUserDataResponse> {
    return this.apiSettingsSearchServicePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<UpdateUserDataResponse>): UpdateUserDataResponse => r.body)
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
      body: PostSearchServiceSettingsRequest
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PostSearchServiceSettingsResponse>> {
    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsSearchServicePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostSearchServiceSettingsResponse>;
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
      body: PostSearchServiceSettingsRequest
    },
    context?: HttpContext
  ): Observable<PostSearchServiceSettingsResponse> {
    return this.apiSettingsSearchServicePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostSearchServiceSettingsResponse>): PostSearchServiceSettingsResponse => r.body)
    );
  }

}
