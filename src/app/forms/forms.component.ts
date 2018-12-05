import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  form = {
    email: '' ,
    password: ''
  };

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.form.value);
  }

}
