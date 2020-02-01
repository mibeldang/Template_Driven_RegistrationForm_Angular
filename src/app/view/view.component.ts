import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public data: Array<any> = []
  id:number
  constructor(
    public Route: ActivatedRoute,
    public Userdata: RegistrationService
  ) { }

  ngOnInit() {
    this.id=this.Route.snapshot.params['id']
    this.Userdata.showSpecificData(this.id).subscribe((data)=>{
      this.data.push(data)
    })
  }

}
