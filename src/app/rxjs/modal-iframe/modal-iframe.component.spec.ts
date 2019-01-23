import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIframeComponent } from './modal-iframe.component';

describe('ModalIframeComponent', () => {
  let component: ModalIframeComponent;
  let fixture: ComponentFixture<ModalIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
