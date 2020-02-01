import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Format } from '../information';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() editDataEvent = new EventEmitter();
  @Output() deleteDataEvent = new EventEmitter();
  @Input() info :Array<Format>


  constructor(private thisRegistrationService: RegistrationService) { }

  ngOnInit() {
  }


  edit(onedata) {
    this.editDataEvent.emit(onedata)
  }

  delete(id) {
    this.thisRegistrationService.deleteData(id)
      .subscribe(response => {
        console.log("Response: ", response)
        this.info.splice(id, 1)
      })
    console.log(this.info)
  }

  // delete(id) {
  //   for (let i = 0; i < this.model.length; i++) {
  //     if (this.model[i].id === this.newInfo.id) {
  //     }
  //     this.model.splice(this.model.indexOf(this.model[i]),1)
  //     break;
  //   }
  // // }
}