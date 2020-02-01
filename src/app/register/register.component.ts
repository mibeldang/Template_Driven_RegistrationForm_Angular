import { Component, OnInit } from '@angular/core';
import { Format } from '../information';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public list: Array<Format>
  public info: Format;
  newInfo: Format;
  register = true;
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  onEdit: boolean = false;
  model: Array<Format>;
  newdata: any
  newUser: any

  newid: number
  newname: string
  newusername: string
  newemail: string
  newphone:string
  newsite: string
  public counter = 0;




  constructor(private thisRegistrationService: RegistrationService) {
    this.model = new Array<Format>()
    this.info = new Format()

  }

  ngOnInit() {
    this.thisRegistrationService.displayData().subscribe(data => {
      this.model = data
      console.log(data)
    })
  }


  onSubmit(data) {
    if (this.onEdit) {
      this.thisRegistrationService.updateData(this.newdata, this.newid)
      this.model.forEach(e => {
        if (e.id == this.newid) {
          e.id=this.newid
          e.name = this.newname
          e.username = this.newusername
          e.email = this.newemail
          e.phone=this.newphone
          e.website = this.newsite
          console.log("e:", e)
        }

      })
      alert("Successfully edited")
     
    } else {
      this.newInfo = new Format
      this.newInfo.name = data.form.value.name
      this.newInfo.username = data.form.value.username
      this.newInfo.email = data.form.value.email
      this.newInfo.phone = data.form.value.phone
      this.newInfo.website = data.form.value.website
      this.thisRegistrationService.addData(this.newInfo)
        .subscribe((res: any) => {
          this.newUser = res
          this.newUser.id -= 1
          this.newUser.id += this.counter
          this.model.push(this.newUser)
          console.log("List:", this.model)
        })
      this.counter += 1
      alert("Submitted Successfully")
    }
    data.form.reset()
    
  }

  // edit(data) {
  //   this.onEdit = true;
  //   this.newInfo = data;
  //   this.thisRegistrationService.updateData(this.newInfo, this.newInfo.id)
  //     .subscribe((response) => {
  //       this.model = this.model.filter(item => {
  //         this.newInfo.id
  //       })
  //     })
  // }
  
  edit(data) {
    this.onEdit = true
    this.newid = data.id
    this.newname = data.name
    this.newusername = data.username
    this.newemail = data.email
    this.newphone = data.phone
    this.newsite = data.website
  }

}
