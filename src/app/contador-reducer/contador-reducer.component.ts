import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reduce } from '../store/actions/counter.actions';


@Component({
  selector: 'app-contador-reducer',
  templateUrl: './contador-reducer.component.html',
  styleUrls: ['./contador-reducer.component.css']
})
export class ContadorReducerComponent {

  
  constructor(private store: Store){}

  //interactuamos con la store y usamos dispatch para realizar la accion de reducir
  reduce(){
    this.store.dispatch(reduce())
  }
}
