/* tslint:disable */
/* eslint-disable */
export interface SendMessageCode {
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
   * успешно ли выполнен запрос
   */
  success?: boolean;
}
