import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddSettings } from '../../../../../../store/actions/settings/settings.actions';

interface Service {
  title: string;
  basicService: string;
  additionalServices: string[];
}

interface IAdditionalServices {
  service: string;
  price: string;
}

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.scss'],
})
export class ServicesModalComponent {
  @Output() onSave = new EventEmitter();

  public formService = new FormGroup({
    service: new FormControl('Не выбрано', Validators.required),
    basicService: new FormControl('', Validators.required),
    additionalServices: new FormControl([''], null),
    price: new FormControl('0', Validators.required),
    additionalPrice: new FormControl('0', Validators.required),
  });

  public services: Service[] = [
    {
      title: 'Маникюр',
      basicService: 'Маникюр c покрытием гель лаком',
      additionalServices: [
        'Аппаратный маникюр',
        'Классический маникюр',
        'Японский маникюр',
        'Пилочный маникюр',
        'Комбинированный маникюр',
        'Мужской маникюр',
        'Наращивание ногтей',
      ],
    },
    {
      title: 'Педикюр',
      basicService: 'Педикюр с покрытием гель лаком',
      additionalServices: [
        'Классический педикюр',
        'Аппаратный педикюр',
        'Дисковый педикюр',
        'Smart педикюр',
        'Педикюр экспресс (обработка пальцев без стопы)',
      ],
    },
    {
      title: 'Визажист',
      basicService: 'Макияж вечерний',
      additionalServices: [
        'Макияж дневной / нюд',
        'Укладка',
        'Образ (макияж и укладка)',
        'Свадебный образ в студии',
        'Репетиция свадебного образа',
        'Выезд',
      ],
    },
  ];

  public selectedService: Service;
  public isSelectedAdditionalService: boolean = false;
  public selectedAdditionalService: IAdditionalServices[] = [];

  constructor(private store: Store) {}

  serviceSelected(isAdditionalService: boolean = false) {
    if (isAdditionalService) {
      this.isSelectedAdditionalService = true;
      return;
    }

    this.selectedService = this.services.find(
      (service) => service.title === this.formService.get('service').value,
    );

    this.formService.controls.basicService.setValue(this.selectedService.basicService);
    this.formService.controls.additionalServices.setValue(this.selectedService.additionalServices);
  }

  submit() {
    this.store.dispatch(
      new AddSettings({
        service: this.formService.get('service').value.toString(),
        price: this.formService.get('price').value.toString(),
        basicService: this.formService.get('basicService').value.toString(),
        additionalServices: this.selectedAdditionalService,
      }),
    );

    this.onSave.emit();
  }

  addAdditionalService() {
    this.isSelectedAdditionalService = false;

    this.selectedAdditionalService.push({
      service: this.formService.get('additionalServices').value.toString(),
      price: this.formService.get('additionalPrice').value.toString(),
    });

    this.formService.get('additionalPrice').setValue('0');
  }

  removeAdditionalService(additionalService: IAdditionalServices) {
    const index = this.selectedAdditionalService.indexOf(additionalService);

    this.selectedAdditionalService.splice(index, 1);
  }

  updateServicePrice(service: IAdditionalServices, event: any): void {
    service.price = event.target.innerText;
  }
}
