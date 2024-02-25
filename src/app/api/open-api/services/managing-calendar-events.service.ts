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

import { GetCalendarEventsResponse } from '../models/get-calendar-events-response';


/**
 * Управление событиями календаря
 */
@Injectable({ providedIn: 'root' })
export class ManagingCalendarEventsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCalendarGet()` */
  static readonly ApiCalendarGetPath = '/api/calendar';

  /**
   * получение всех событий календаря.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCalendarGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCalendarGet$Response(
    params: {
      token: any;

    /**
     * Массив из двух дат, начало периода, конец периода
     */
      dates?: Array<string>;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<GetCalendarEventsResponse>> {
    const rb = new RequestBuilder(this.rootUrl, ManagingCalendarEventsService.ApiCalendarGetPath, 'get');
    if (params) {
      rb.header('token', params.token, {});
      rb.query('dates', params.dates, {"style":"form","explode":false});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetCalendarEventsResponse>;
      })
    );
  }

  /**
   * получение всех событий календаря.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCalendarGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCalendarGet(
    params: {
      token: any;

    /**
     * Массив из двух дат, начало периода, конец периода
     */
      dates?: Array<string>;
    },
    context?: HttpContext
  ): Observable<GetCalendarEventsResponse> {
    return this.apiCalendarGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetCalendarEventsResponse>): GetCalendarEventsResponse => r.body)
    );
  }

}
