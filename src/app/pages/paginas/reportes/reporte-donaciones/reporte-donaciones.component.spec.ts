import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReporteDonacionesComponent } from './reporte-donaciones.component';

describe('ReporteDonacionesComponent', () => {
  let component: ReporteDonacionesComponent;
  let fixture: ComponentFixture<ReporteDonacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDonacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
