import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoappComponent } from './logoapp.component';

describe('LogoappComponent', () => {
  let component: LogoappComponent;
  let fixture: ComponentFixture<LogoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
