import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilkscreenMainComponent } from './silkscreen-main.component';

describe('SilkscreenMainComponent', () => {
  let component: SilkscreenMainComponent;
  let fixture: ComponentFixture<SilkscreenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilkscreenMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilkscreenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
