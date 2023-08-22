import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { WebSocketService } from '../../shared/services/web-socket.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit, OnDestroy {
  private interval: any = null;
  private readonly code: string = '+7';
  public readonly defaultPhone: string = '9618833812';
  public readonly defaultTimer: number = 13;

  @ViewChildren('inputs') elementRefInputs: QueryList<ElementRef>;

  @Output() public authorizationChange = new EventEmitter();

  public isShowFormCode = false;
  public isFocused = false;
  public isShowIncorrect = false;
  public isRetryCode: boolean;
  public formPhone = new FormGroup({
    phone: new FormControl('', Validators.required),
    code: new FormGroup({
      first: new FormControl('', Validators.required),
      second: new FormControl('', Validators.required),
      third: new FormControl('', Validators.required),
      fourth: new FormControl('', Validators.required),
    }),
  });
  public time = this.defaultTimer;

  constructor(
    private authService: AuthService,
    private wsService: WebSocketService,
    private renderer: Renderer2,
  ) {
    /* Показ "Неправильный код" */
    this.wsService.verificationSubject$.subscribe((response) => {
      if (response !== null) {
        this.isShowIncorrect = !response;
      }
    });

    this.wsService.asObservable.subscribe((response) => {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        // @ts-ignore
        if (this.time === '01') {
          this.isRetryCode = true;
          this.isShowFormCode = false;
          this.time = this.defaultTimer;
          clearInterval(this.interval);
        } else if (this.time > 0) {
          this.isRetryCode = false;

          if (this.time < 11) {
            // @ts-ignore
            this.time = `0${this.time - 1}`;
          } else {
            this.time--;
          }
        }
      }, 1000);
    });
  }

  public ngOnInit() {
    this.authService.register('').subscribe();
    this.wsService.connect();
  }

  public onSubmit() {
    this.resetFormPhone();

    this.wsService.emitPhone(`7${this.defaultPhone}`);

    this.wsService.asObservable.subscribe((response) => {
      this.isShowFormCode = response;
    });
  }

  public sendCode() {
    const code =
      this.formPhone.controls.code.value.first.toString() +
      this.formPhone.controls.code.value.fourth.toString() +
      this.formPhone.controls.code.value.second.toString() +
      this.formPhone.controls.code.value.third.toString();

    this.wsService.emitCode(code);

    this.resetFormPhone();
  }

  /* очистка формы после отправки кода */
  public resetFormPhone(): void {
    this.isShowIncorrect = false;
    this.formPhone.controls.code.reset();
  }

  public onFocus = () => (this.isFocused = true);

  public onBlur = () => (this.isFocused = false);

  public inputChange(index: number, event: Event) {
    const isBackSpace = (event as InputEvent).inputType === 'deleteContentBackward';
    const isLast = this.elementRefInputs.last === this.elementRefInputs.get(index);
    const element = this.elementRefInputs.get(index);
    const nextElement = this.elementRefInputs.get(index + 1);

    //@ts-ignore
    element.nativeElement.value = event.data;

    // отобразить кнопку отправить код
    // this.isSendCode = !!this.formPhone.controls.code.valid;

    /* Если нажали удаление => то не переступать на следующую ячейку */
    if (isBackSpace) {
      return;
    }

    /* Если элемент последний => убираем выделение последней ячейки */
    if (isLast) {
      this.renderer.selectRootElement(element.nativeElement).blur();

      return;
    }

    this.renderer.selectRootElement(nextElement.nativeElement).focus();
  }

  public ngOnDestroy() {
    this.wsService.destroy();
    clearInterval(this.interval);
  }
}
