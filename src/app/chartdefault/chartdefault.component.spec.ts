import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdefaultComponent } from './chartdefault.component';

describe('ChartdefaultComponent', () => {
  let component: ChartdefaultComponent;
  let fixture: ComponentFixture<ChartdefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartdefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
