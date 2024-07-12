import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../employee.model';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  selectedEmployee: Employee;
  statusChanged:any='';
  userSel:any={};
  searchResult:any='';
  userObj:any=[];
  baseURL ='http://localhost:8000/employees/'
  constructor(private http:HttpClient) { 
  }

  users(){
     this.http.get(this.baseURL).subscribe((res) => {
       this.userObj = res ;
     })
  }

  updateUser(user:any){
    console.log(user);
    // return this.http.put(this.baseURL + user._id,user);
    this.http.put('http://localhost:8000/employees/'+ user._id,user).subscribe((data) => {
      console.log(data);

      this.users();

    })
  }
}


// this.users()
// this.userSel = data;
