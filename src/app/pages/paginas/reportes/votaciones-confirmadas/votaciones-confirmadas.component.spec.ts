import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VotacionesConfirmadasComponent } from './votaciones-confirmadas.component';

describe('VotacionesConfirmadasComponent', () => {
  let component: VotacionesConfirmadasComponent;
  let fixture: ComponentFixture<VotacionesConfirmadasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacionesConfirmadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionesConfirmadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
