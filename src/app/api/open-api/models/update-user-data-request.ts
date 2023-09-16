/* tslint:disable */
/* eslint-disable */
export interface UpdateUserDataRequest {
  searchServiceUserData: {
'activeAccount'?: boolean;
'socialNetwork'?: Array<string>;
'workPhoneNumber'?: string;
'firstName'?: string;
'lastName'?: string;
'userServices'?: Array<{
'service'?: string;
'price'?: string;
}>;
'additionalServices'?: Array<string>;
'address'?: Array<string>;
'whatsapp'?: string;
'telegram'?: string;
};

  /**
   * id пользователя
   */
  userId: string;
}
