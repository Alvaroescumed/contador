import { Component } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  count$: Observable<number>

  //hacemos que nuestro componente interactue con la store y tome el valor de esta
  
  constructor(private store: Store <{ count : number}>) {
    this.count$ = store.pipe(select('count'));
  }
}
