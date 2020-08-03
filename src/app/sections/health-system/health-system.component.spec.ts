import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSystemComponent } from './health-system.component';

describe('HealthSystemComponent', () => {
  let component: HealthSystemComponent;
  let fixture: ComponentFixture<HealthSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
