import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportarfraudeComponent } from './reportarfraude.component';

describe('ReportarfraudeComponent', () => {
  let component: ReportarfraudeComponent;
  let fixture: ComponentFixture<ReportarfraudeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarfraudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarfraudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
