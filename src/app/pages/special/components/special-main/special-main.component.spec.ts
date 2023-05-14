import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialMainComponent } from './special-main.component';

describe('SpecialMainComponent', () => {
  let component: SpecialMainComponent;
  let fixture: ComponentFixture<SpecialMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
