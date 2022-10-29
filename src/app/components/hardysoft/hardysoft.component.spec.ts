import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysoftComponent } from './hardysoft.component';

describe('HardysoftComponent', () => {
  let component: HardysoftComponent;
  let fixture: ComponentFixture<HardysoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardysoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
