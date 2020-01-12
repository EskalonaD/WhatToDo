import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryTasksComponent } from './ordinary-tasks.component';

describe('OrdinaryTasksComponent', () => {
  let component: OrdinaryTasksComponent;
  let fixture: ComponentFixture<OrdinaryTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinaryTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
