/* tslint:disable */
/* eslint-disable */
export interface GetCalendarEventsResponse {
  data?: Array<{
'id'?: string;
'date'?: string;
'name'?: string;
'service'?: Array<number>;
'start_time'?: string;
'end_time'?: string;
'phone_number'?: string;
'notes'?: string;
}>;

  /**
   * успешно ли выполнен запрос
   */
  success?: boolean;

  /**
   * токен сессии
   */
  token?: string;
}
