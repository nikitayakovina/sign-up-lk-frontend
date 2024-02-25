import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import * as moment from 'moment/moment';
import { Select, Store } from '@ngxs/store';
import { CalendarState } from '../../../../../../store/states/calendar/calendar.state';
import { Observable } from 'rxjs';
import { CalendarEventService } from '../../services/personal-area-calendar.service';
import { ModalService } from '../../../../../../shared/services/modal.service';
import { CalendarGridModalComponent } from './calendar-grid-modal/calendar-grid-modal.component';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ChangeDetection } from '@angular/cli/lib/config/workspace-schema';
import { mod } from 'ngx-bootstrap/chronos/utils';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

// передаем на бэк в виде строки 'YYYY-MM-DD' а там уже в new Date() а старт и конец уже подумать
// подумать над архитиктурой данного компонента и вложенных, где получать данные о записях и в целом
// console.log(new Date(this._daysArray[0].format('YYYY-MM-DD')))
// console.log(this._daysArray[0].format('YYYY-MM-DDTHH:mm:ss.SSSZ'))
// console.log(this._startWeek.format('YYYY-MM-DD'))
type calendarEvents = {
  id?: string;
  date?: string;
  name?: string;
  service?: Array<number>;
  start_time?: string;
  end_time?: string;
  phone_number?: string;
  notes?: string;
};
type daysArray = {
  moment: moment.Moment;
  events: calendarEvents[] | null;
};
@Component({
  selector: 'calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
})
export class CalendarGridComponent implements OnInit {
  // private modalRef: BsModalRef;
  public modalStyle: { [key: string]: string } = {};
  @Select(CalendarState.getDaysArray) daysArray$: Observable<moment.Moment[]>;
  @Select(CalendarState.getObjectCalendarEvents) objectCalendarEvents$: Observable<daysArray[]>;
  @ViewChild('template') templateRef!: TemplateRef<any>;
  constructor(private store: Store, public modalService: BsModalService) {}
  ngOnInit() {
    // this.objectCalendarEvents$.subscribe((e) => console.log(e));
  }

  public openModal(event: MouseEvent): void {
    const initialState = {
      x: event.clientX,
      y: event.clientY,
    };
    this.modalService.show(CalendarGridModalComponent, {
      initialState,
    });
    // this.modalRef.location.nativeElement.style.top = event.clientY + 'px';
    // this.modalRef.location.nativeElement.style.left = event.clientX + 'px';

    // this.modalStyle = { position: 'absolute', top: '0', left: '0' };
    // popup.style.left = e.pageX - popup.offsetWidth + 'px'; offsetWidth - width element
    // popup.style.top = e.pageY + 'px';
  }
  public isCurrentDay(day: moment.Moment) {
    return moment().isSame(day, 'day');
  }
  public isSelectedMonth(day: moment.Moment) {
    const currentMonth = this.store.selectSnapshot((state) => state.calendar.today);
    return currentMonth.isSame(day, 'month');
  }

  protected readonly moment = moment;
}
