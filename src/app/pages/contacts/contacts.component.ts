import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  form!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-яЁёІіЇї]*$/),
        Validators.minLength(2)
      ]),
      secondName: new FormControl(''),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[- +()0-9]+'),
        Validators.minLength(14)
      ]),
      message: new FormControl(null)
    })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form value: ', this.form.value)

      this.form.reset()
    }
  }

}
