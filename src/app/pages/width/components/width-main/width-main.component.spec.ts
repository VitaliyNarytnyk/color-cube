import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthMainComponent } from './width-main.component';

describe('WidthMainComponent', () => {
  let component: WidthMainComponent;
  let fixture: ComponentFixture<WidthMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
