import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule, HttpClientTestingModule
    ],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it ('should have Sign up in "Sign up Button"', () =>{
    const btn = fixture.debugElement.nativeElement.querySelector('#tt');
    expect(btn.innerHTML).toBe('Sign up');
  })
  // it('submitting a form emits a user', () => {
  //   expect(component.signupForm.valid).toBeFalsy();
  //   component.signupForm.controls['email'].setValue("adeo@gmail.com");
  //   component.signupForm.controls['password'].setValue("1234");
  //   expect(component.signupForm.valid).toBeTruthy();

  //   let user: User;
  //   // Subscribe to the Observable and store the user in a local variable.
  //   component.loggedIn.subscribe((value) => user = value);

  //   // Trigger the login function
  //   component.login();

  //   // Now we can check to make sure the emitted value is correct
  //   expect(user.email).toBe("test@test.com");
  //   expect(user.password).toBe("123456789");
  // });

});
