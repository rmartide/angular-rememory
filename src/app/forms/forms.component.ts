import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      'email': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[\\S\\s]{6,}$')
      ])
    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
