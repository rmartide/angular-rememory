import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formGroup: FormGroup;

  customErrorMessages: ErrorMessage[] = [
    {
      error: 'pattern',
      format: (label, error) => `${label} must have at least one lowercase letter, one uppercase letter and one number`
    }
  ];

  ngOnInit() {

    this.formGroup = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[\\S\\s]{3,}$')
      ]]
    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit() {
    console.log(this.formGroup.value);
  }

}
