import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRetiroComponent } from './total-retiro.component';

describe('TotalRetiroComponent', () => {
  let component: TotalRetiroComponent;
  let fixture: ComponentFixture<TotalRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
