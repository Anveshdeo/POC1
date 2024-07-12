import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  list =[
    {
      number:'1',
      name:'Dash Board',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'Member Benefits Management',
      icon:'fa-solid fa-plus'
    },
    {
      number:'3',
      name:'Pay Bill',
      icon:'fa-solid fa-dollar-sign'
    },
    {
      number:'4',
      name:'Reporting',
      icon:'fa-solid fa-folder'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
