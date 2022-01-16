import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportaranomaliaComponent } from './reportaranomalia.component';

describe('ReportaranomaliaComponent', () => {
  let component: ReportaranomaliaComponent;
  let fixture: ComponentFixture<ReportaranomaliaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportaranomaliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportaranomaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
