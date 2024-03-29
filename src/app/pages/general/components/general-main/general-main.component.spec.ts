import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMainComponent } from './general-main.component';

describe('KitchenMainComponent', () => {
  let component: GeneralMainComponent;
  let fixture: ComponentFixture<GeneralMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
