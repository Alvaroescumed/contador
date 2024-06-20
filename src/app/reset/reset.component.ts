import { Component } from '@angular/core';
import { reset } from '../store/actions/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(private store: Store){}

  //interactuamos con la store para resetear el contador
  reset(){
    this.store.dispatch(reset())
  }

}
