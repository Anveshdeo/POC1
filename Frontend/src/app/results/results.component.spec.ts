import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { delay, of } from 'rxjs';
import {UsersDataService} from '../service/users-data.service'
import { ResultsComponent } from './results.component';
import { FilterPipe } from '../search/filter.pipe'
describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let filter: FilterPipe;
  let service: UsersDataService;
  let USERS;
  beforeEach(async () => {
    service = jasmine.createSpyObj(['users']);
    USERS = [
      {
        "_id": "634c79fb64a67f237825addb",
        "firstName": "John",
        "lastName": "Peter",
        "relationship": "Employee",
        "dob": "07/09/1989",
        "ssn": 123459124,
        "memberid": 110020158,
        "__v": 0,
        "status": "Inactive"
        },
        {
        "_id": "634d032664a67f237825addd",
        "firstName": "John",
        "lastName": "Mark",
        "relationship": "Employee",
        "dob": "01/02/1991",
        "ssn": 123458768,
        "memberid": 110020189,
        "__v": 0,
        "status": "Inactive"
        },
        {
        "_id": "634d057564a67f237825addf",
        "firstName": "Anvesh",
        "lastName": "Mark",
        "relationship": "Employee",
        "dob": "08/07/2000",
        "ssn": 123456768,
        "memberid": 110021188,
        "__v": 0,
        "status": "Inactive"
        },
        {
        "_id": "634d05ae64a67f237825ade2",
        "firstName": "Anvesh",
        "lastName": "Peter",
        "relationship": "Employee",
        "dob": "08/04/2000",
        "ssn": 123450008,
        "memberid": 110021008,
        "__v": 0,
        "status": "Inactive"
        },
        {
        "_id": "635157c3e8e88417556a2700",
        "firstName": "Prakash",
        "lastName": "Peter",
        "relationship": "Employee",
        "dob": "08/04/2005",
        "ssn": 123451234,
        "memberid": 110029999,
        "__v": 0,
        "status": "Inactive"
        },
        {
        "_id": "63579aa50141466de740746a",
        "firstName": "Akshat",
        "lastName": "Sharma",
        "relationship": "Employee",
        "dob": "08/04/2003",
        "ssn": 123451220,
        "memberid": 110028899,
        "__v": 0,
        "status": "Inactive"
        }
    ]
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ResultsComponent, FilterPipe ],
      providers: [UsersDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(UsersDataService);
  });

  // xit('should set users correctly from the service', () => {
  //   service.users.and.returnValue(of(USERS));
  //   fixture.detectChanges();
  //   expect(fixture.componentInstance.usersData.userObj.length).toBe(6)
  // })
// it('unenroll button hidden', () =>{
//   let el = fixture.debugElement.query(By.css('td'))
//   fixture.detectChanges();
//   expect(el.nativeElement.textContent.trim()).toBeDefined()
// })
it('enroll button status', () =>{
  expect(component.enroll).toBe(false)
})

it('status when clicked on uneroll button is Inactive',() =>{
  expect(component.unenrolluser).toBe('Inactive')
})

});


