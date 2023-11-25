/* tslint:disable */
/* eslint-disable */
export interface PostSearchServiceSettingsRequest {

  /**
   * активность пользователя в поисковом сервисе
   */
  activeAccount?: boolean;

  /**
   * список дополнительных услуг пользователя
   */
  additionalServices?: Array<string>;

  /**
   * адреса пользователя
   */
  address?: Array<string>;

  /**
   * имя пользователя
   */
  firstName?: string;

  /**
   * фамилия пользователя
   */
  lastName?: string;

  /**
   * список социальных сетей пользователя
   */
  socialNetwork?: Array<string>;

  /**
   * ник Telegram пользователя
   */
  telegram?: string;

  /**
   * список услуг пользователя
   */
  userServices?: Array<{
'service'?: string;
'price'?: string;
}>;

  /**
   * номер WhatsApp пользователя
   */
  whatsapp?: string;

  /**
   * рабочий номер телефона пользователя
   */
  workPhoneNumber?: string;
}
