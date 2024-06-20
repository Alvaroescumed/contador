import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorReducerComponent } from './contador-reducer.component';

describe('ContadorReducerComponent', () => {
  let component: ContadorReducerComponent;
  let fixture: ComponentFixture<ContadorReducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorReducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
