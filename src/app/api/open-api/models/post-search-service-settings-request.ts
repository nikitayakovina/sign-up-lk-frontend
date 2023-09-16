/* tslint:disable */
/* eslint-disable */
export interface PostSearchServiceSettingsRequest {
  searchServiceUserData: {

/**
 * активность пользователя в поисковом сервисе
 */
'activeAccount'?: boolean;

/**
 * список социальных сетей пользователя
 */
'socialNetwork'?: Array<string>;

/**
 * рабочий номер телефона пользователя
 */
'workPhoneNumber'?: string;

/**
 * имя пользователя
 */
'firstName'?: string;

/**
 * фамилия пользователя
 */
'lastName'?: string;

/**
 * список услуг пользователя
 */
'userServices'?: Array<{
'service'?: string;
'price'?: string;
}>;

/**
 * список дополнительных услуг пользователя
 */
'additionalServices'?: Array<string>;

/**
 * адреса пользователя
 */
'address'?: Array<string>;

/**
 * номер WhatsApp пользователя
 */
'whatsapp'?: string;

/**
 * ник Telegram пользователя
 */
'telegram'?: string;
};

  /**
   * id пользователя
   */
  userId: string;
}
