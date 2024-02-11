import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagingCalendarEventsService } from '../../../../../api/open-api/services/managing-calendar-events.service';
import { GetCalendarEventsResponse } from '../../../../../api/open-api/models/get-calendar-events-response';
import { AuthService } from '../../../../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventService {
  constructor(
    private authService: AuthService,
    private calendarEvents: ManagingCalendarEventsService,
  ) {}

  public fetchCalendarEvents(dates: Array<string>): Observable<GetCalendarEventsResponse> {
    const token = this.authService.currentUserValue;
    return this.calendarEvents.apiCalendarGet({ token, dates });
  }
}
