import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-mbm',
  templateUrl: './mbm.component.html',
  styleUrls: ['./mbm.component.css'],
})
export class MbmComponent implements OnInit {
  // users: any;
  nameSearch: string = '';
  // nameSearch1: string = '';
  // list = [
  //   {
  //     number: '1',
  //     name: 'Dash Board',
  //     icon: 'fa-solid fa-house',
  //   },
  //   {
  //     number: '2',
  //     name: 'Member Benefits Management',
  //     icon: 'fa-solid fa-plus',
  //   },
  //   {
  //     number: '3',
  //     name: 'Pay Bill',
  //     icon: 'fa-solid fa-dollar-sign',
  //   },
  //   {
  //     number: '4',
  //     name: 'Reporting',
  //     icon: 'fa-solid fa-folder',
  //   },
  // ];

  constructor(
    private router: Router,
    public usersData: UsersDataService) {}

  ngOnInit(): void {}
  searchResult() {
    // console.log(this.nameSearch + this.nameSearch1);
    let solution = this.nameSearch;
    console.log(solution);
    this.usersData.searchResult = solution;
    console.log(this.usersData.searchResult);
    this.router.navigate(['result']);
  }
}
