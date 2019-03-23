import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaskService, NgxMaskModule} from 'ngx-mask';


fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
      ],
      providers:
      [
        MaskService
      ]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    inject([MaskService], (injectService: MaskService) => {
      expect(injectService).toBe(component);
    });
    expect(component).toBeTruthy();
  });
});
