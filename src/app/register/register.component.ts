import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Format } from '../information';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public list: Array<Format>
  public info: Format
  register = true;
  nameInput: string;
  lnameInput: string;
  emailInput: string;
  passInput: string;
  genderInput: string;
  enrollInput: string;

  constructor() {
    this.list = new Array<Format>()
    this.info = new Format()

  }

  ngOnInit() {

  }


  onSubmit(info) {
    this.list.push(info.form.value)
    info.form.reset()
    alert("Submitted Successfully")


  }
  edit(data) {
    this.info = data
    this.list = this.list.filter(error => {
      if (error != data) {
        return error
      } else {
        alert("Save changes first before editing other data")
      }
    })

  }


}
