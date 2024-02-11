import { Moment } from 'moment';

export class GenerateArrayDays {
  static readonly type = '[Calendar] Generate Array Days';
  constructor(public momentObject: Moment) {} // изменить типы
}

export class GetToday {
  static readonly type = '[Calendar] Get Today';

  constructor(public momentObject: Moment) {} // изменить типы
}

export class GetEventsDays {
  static readonly type = '[Calendar] Get Events Days';
  constructor(public arrayData: any) {}
}
