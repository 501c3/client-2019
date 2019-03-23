import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XtraComponent } from './xtra.component';

describe('XtraComponent', () => {
  let component: XtraComponent;
  let fixture: ComponentFixture<XtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
