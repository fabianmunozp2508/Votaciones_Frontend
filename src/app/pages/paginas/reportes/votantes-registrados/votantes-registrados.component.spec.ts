import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VotantesRegistradosComponent } from './votantes-registrados.component';

describe('VotantesRegistradosComponent', () => {
  let component: VotantesRegistradosComponent;
  let fixture: ComponentFixture<VotantesRegistradosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VotantesRegistradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotantesRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
