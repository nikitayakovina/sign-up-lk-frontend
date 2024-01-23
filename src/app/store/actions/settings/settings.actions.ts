export interface ISettingsAdd {
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
  constructor(public id: string, public changes: Partial<ISettingsAdd>) {}
}

export class DeleteSettings {
  static readonly type = '[Settings] Delete';
  constructor(public id: string) {}
}
