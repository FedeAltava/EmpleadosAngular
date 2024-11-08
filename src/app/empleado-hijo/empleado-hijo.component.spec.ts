import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijoComponent } from './empleado-hijo.component';
import { CommonModule } from '@angular/common';

describe('EmpleadoHijoComponent', () => {
  let component: EmpleadoHijoComponent;
  let fixture: ComponentFixture<EmpleadoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoHijoComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
