import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorIncreaseComponent } from './contador-increase.component';

describe('ContadorIncreaseComponent', () => {
  let component: ContadorIncreaseComponent;
  let fixture: ComponentFixture<ContadorIncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorIncreaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
