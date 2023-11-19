/* tslint:disable */
/* eslint-disable */
export interface CheckMessageCode {
  data?: {

/**
 * токен сессии
 */
'token'?: string;
'widgets'?: Array<{

/**
 * идентификатор виджета
 */
'widgetId'?: number;

/**
 * активен ли виджет
 */
'active'?: boolean;

/**
 * название виджета
 */
'widgetName'?: string;

/**
 * идентификатор виджета
 */
'_id'?: string;
}>;
};

  /**
   * сообщение о успешном запросе
   */
  message?: string;

  /**
   * успешно ли выполнен запрос
   */
  success?: boolean;
}
