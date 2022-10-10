import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaRetiroComponent } from './cuenta-retiro.component';

describe('CuentaRetiroComponent', () => {
  let component: CuentaRetiroComponent;
  let fixture: ComponentFixture<CuentaRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
