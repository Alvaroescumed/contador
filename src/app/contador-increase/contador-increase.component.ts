import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { increase } from '../store/actions/counter.actions';

@Component({
  selector: 'app-contador-increase',
  templateUrl: './contador-increase.component.html',
  styleUrls: ['./contador-increase.component.css']
})
export class ContadorIncreaseComponent {

  constructor(private store: Store){}

//interactuamos con la store y usamos dispatch para realizar la accion de incrementar
  increment(){
    this.store.dispatch(increase())
  }
}
