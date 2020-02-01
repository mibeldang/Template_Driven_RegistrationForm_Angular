import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Format } from './information';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public dataURL = 'http://jsonplaceholder.typicode.com/users'
  posts: Observable<Format[]>;

  constructor(private http: HttpClient) {

  }

  displayData() {
    return this.http.get<Format[]>(this.dataURL);
  }

  addData(data: object): Observable<{}> {
    return this.http.post<Format[]>(this.dataURL, data, httpOptions)
  }

  // updateData(data, id: number): Observable<{}> {
  //   const url = `${this.dataURL}/${id}`;
  //   return this.http.put(url, data)
  // }
  updateData(user, id: any) {
    return this.http.put(this.dataURL + "/:" + user, id)
    }

  deleteData(id: number): Observable<{}> {
    const url = `${this.dataURL}/${id}`;
    return this.http.delete(url, httpOptions)
  }

  showSpecificData(id){
    return this.http.get(this.dataURL + "/" + id)
  }



}
