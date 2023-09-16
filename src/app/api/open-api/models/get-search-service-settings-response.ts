/* tslint:disable */
/* eslint-disable */
export interface GetSearchServiceSettingsResponse {

  /**
   * активность пользователя в поисковом сервисе
   */
  activeAccount?: boolean;

  /**
   * список дополнительных услуг пользователя
   */
  additionalServices?: Array<string>;

  /**
   * рабочий адрес
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
   * ник еelegram пользователя
   */
  telegram?: string;
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
