// import { TestBed } from '@angular/core/testing';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
// import { UsersDataService } from './users-data.service';
// import { HttpClient } from '@angular/common/http';

import { HttpClient } from "@angular/common/http"
import { of } from "rxjs"
import { UsersDataService } from "./users-data.service"

// describe('UsersDataService', () => {
//   let service: UsersDataService;
//   let http: HttpClient;
//   let httpController: HttpTestingController;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers:[UsersDataService]
//     });
//     service = TestBed.inject(UsersDataService);
//     http = TestBed.inject(HttpClient);
//     httpController = TestBed.inject(HttpTestingController);
//   });

//   // xit('should be created', () => {
//   //   expect(service).toBeTruthy();
//   // });

//   it('service created', () => {
//     expect(UsersDataService).toBeDefined();
//   })
// });

describe('UsersDataService', () => {
  let service: UsersDataService
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let Post = [{
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
    }]
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get'])
    service = new UsersDataService(httpClientSpy);
  })
  // describe('users()', () => {
  //   it('should return expected users when called',() => {
  //     httpClientSpy.get.and.returnValue(of(Post));
  //     service.users().({
  //       next:(posts) =>{
  //         expect(posts).toEqual(Post)
  //       }
  //     })
  //   })
  // })
})