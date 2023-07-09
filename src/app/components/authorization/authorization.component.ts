import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
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
export class AuthorizationComponent implements OnDestroy {
  private readonly code: string = '+7';
  public readonly defaultPhone: string = '9618833873';

  @ViewChildren('inputs') elementRefInputs: QueryList<ElementRef>;

  @Output() public authorizationChange = new EventEmitter();

  public isShowFormCode = false;
  public isFocused = false;
  public formPhone = new FormGroup({
    phone: new FormControl('', Validators.required),
    code: new FormGroup({
      first: new FormControl('', Validators.required),
      second: new FormControl('', Validators.required),
      third: new FormControl('', Validators.required),
      fourth: new FormControl('', Validators.required),
    }),
  });

  constructor(
    private authService: AuthService,
    private wsService: WebSocketService,
    private renderer: Renderer2,
  ) {
    this.authService.register('').subscribe();
    this.wsService.connect();
  }

  public onSubmit() {
    const phone = `${this.code}${this.formPhone.value.phone}`;
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

    this.wsService.emitCode(code).subscribe((response) => {
      this.authorizationChange.emit(response);
    });
  }

  public onFocus = () => (this.isFocused = true);

  public onBlur = () => (this.isFocused = false);

  public inputChange(input: any, index: number) {
    const element = this.elementRefInputs.get(index);
    const nextElement = this.elementRefInputs.get(index + 1);
    const isLast = this.elementRefInputs.last === this.elementRefInputs.get(index);

    if (isLast) {
      this.renderer.selectRootElement(element.nativeElement).blur();

      return;
    }

    this.renderer.selectRootElement(nextElement.nativeElement).focus();
  }

  public ngOnDestroy() {
    this.wsService.destroy();
  }
}
