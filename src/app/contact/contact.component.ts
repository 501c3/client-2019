import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('submitButton') submitButton: ElementRef;
    form: FormGroup;

    first: FormControl;
    last: FormControl;

    email: FormControl;
    phone: FormControl;
    mobile: FormControl;

    country: FormControl;
    organization: FormControl;
    street: FormControl;
    city: FormControl;
    state: FormControl;
    postal: FormControl;


  canSubmit = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      id: ['', []],
      name:
        this.fb.group({
          title: ['', []],
          first: ['', Validators.required],
          middle: ['', []],
          last:   ['', Validators.required],
          suffix: ['', []]
        }),
      email:  ['', [Validators.required,Validators.email]],
      phone:  ['', []],
      mobile: ['', []],
      address:
        this.fb.group({
          country: ['', Validators.required],
          organization: ['', []],
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          postal: ['', Validators.required]
        }),
    });
  }

  ngOnInit() {
    // @ts-ignore
    this.first = this.form.controls.name.controls.first;
    // @ts-ignore
    this.last  = this.form.controls.name.controls.last;
    // @ts-ignore
    this.email = this.form.controls.email;
    // @ts-ignore
    this.phone = this.form.controls.phone;
    // @ts-ignore
    this.country = this.form.controls.address.controls.country;
    // @ts-ignore
    this.street = this.form.controls.address.controls.street;
    // @ts-ignore
    this.city = this.form.controls.address.controls.city;
    // @ts-ignore
    this.state = this.form.controls.address.controls.state;
    // @ts-ignore
    this.postal = this.form.controls.address.controls.postal;
  }

  formValid() {
    if(this.form.controls.name.valid &&
      this.form.controls.address.valid &&
      this.form.controls.email.valid &&
      this.form.controls.phone.value.toString().length==14) {
      return true;
    }
  }

  onSubmit() {
    if (this.formValid()) {
        console.log(this.form.value);
    } else {

    }
  }

}
