import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorReducerComponent } from './contador-reducer/contador-reducer.component';
import { ContadorIncreaseComponent } from './contador-increase/contador-increase.component';
import { StoreModule } from '@ngrx/store';
import { ResetComponent } from './reset/reset.component';
import { counterReducer } from './store/reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorReducerComponent,
    ContadorIncreaseComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}) //ponemos como store nuesto reducer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
