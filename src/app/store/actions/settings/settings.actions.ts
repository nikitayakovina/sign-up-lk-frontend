import { Guid } from 'guid-typescript';

export interface ISettingsAdd {
  id?: Guid;
  service: string;
  price: string;
  basicService?: string;
  additionalServices?: ISettingsAdd[];
}

export class AddSettings {
  static readonly type = '[Settings] Add';
  constructor(public settings: ISettingsAdd) {}
}

export class UpdateSettings {
  static readonly type = '[Settings] Update';
  constructor(public id: Guid, public changes: Partial<ISettingsAdd>) {}
}

export class DeleteSettings {
  static readonly type = '[Settings] Delete';
  constructor(public id: Guid) {}
}
