import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesContainerComponent } from './boxes-container.component';

describe('BoxesContainerComponent', () => {
  let component: BoxesContainerComponent;
  let fixture: ComponentFixture<BoxesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
