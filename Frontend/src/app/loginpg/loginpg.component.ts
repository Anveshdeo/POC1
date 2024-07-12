import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder} from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpg',
  templateUrl: './loginpg.component.html',
  styleUrls: ['./loginpg.component.css']
})
export class LoginpgComponent implements OnInit {

public loginForm !: FormGroup
constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res =>{
      const user = res.find((a:any) =>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Successfull!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
    },err =>{
      alert("Something went wrong")
    })
  }
  
}
