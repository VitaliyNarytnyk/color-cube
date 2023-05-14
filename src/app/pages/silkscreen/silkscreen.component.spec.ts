import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkscreenComponent } from './silkscreen.component';

describe('SilkscreenComponent', () => {
  let component: SilkscreenComponent;
  let fixture: ComponentFixture<SilkscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilkscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilkscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
