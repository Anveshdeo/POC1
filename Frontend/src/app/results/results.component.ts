import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';
import { FilterPipe } from '../search/filter.pipe';
import { Employee } from '../employee.model';
import { database } from 'faker';
import { throws } from 'assert';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  userObj:any = [];
  result='';
  // nameSearch:string = '';
  searchData:any='';
  enroll = false;
  userSelected:any={};
  unEnroll = false;
  unenrolluser ='Inactive';
  enrollmentPage = false;
  
  constructor(public usersData:UsersDataService) {
   }


  ngOnInit(): void {
    this.result = this.usersData.searchResult;
    console.log(this.result)
    this.searchData = this.result
    this.usersData.users();
    this.userObj = this.usersData.users()
  }

  onEdit(user : Employee){
    this.enroll = false;
    if(user.status === 'Inactive'){
      this.unEnroll = true
      this.usersData.updateUser(user)
    }
   
  }

  enrollUser(data:any){
    console.log(data);
    // data.status = this.unenrolluser;
    this.userSelected = data;
    this.enrollmentPage = true;
    
    // this.enroll = true;
    // this.usersData.updateUser(this.userSelected)

  }

  Update(data:any){
    console.log(data);
    this.usersData.updateUser(data)
    this.enroll = true;
  }

  UnenrollUser(data:any){
    data.status = this.unenrolluser
    this.usersData.updateUser(data)
    this.enroll = false; 
  }
}
// this.usersData.userSel = this.userSelected;
