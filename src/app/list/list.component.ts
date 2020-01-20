import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Format } from '../information';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() member:Array<Format>
  @Output() editData=new EventEmitter();
  
  
  constructor() { }

  ngOnInit() {
  }

  edit(onedata){
   this.editData.emit(onedata)
   console.log(onedata)

  }
}