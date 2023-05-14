import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MainService } from '@app/core/services';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form!: FormGroup

  constructor(
    private mainService: MainService,
  ) { }

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
        Validators.minLength(13)
      ]),
      message: new FormControl(null)
    })
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      //this.mainService.sendForm(this.form.value)
      //  .subscribe(res => {
      //    window.open('https://mailthis.to/confirm', '_blank');
      //  })
      this.form.reset()
    }
  }

}
