import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
 @Input() userSelected:any
 @Output() updateEvent:EventEmitter<any>
//  enrollbutton = false;
 status:string = 'Active';
  constructor() { this.updateEvent = new EventEmitter; }

  ngOnInit(): void {
  }
  Enrollment(_id:any){
    this.userSelected.status = this.status
    this.updateEvent.emit(this.userSelected)
  }
  
}
