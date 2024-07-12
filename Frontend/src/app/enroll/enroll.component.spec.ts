import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EnrollComponent } from './enroll.component';

describe('EnrollComponent', () => {
  let component: EnrollComponent;
  let fixture: ComponentFixture<EnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should have Enrollment in "Enrollment Button"', () =>{
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    expect(btn.innerHTML).toBe('Enrollment');
  })

  // it('should enable', () => {
  //   let submitEl = fixture.debugElement.query(By.css('button'))
  //   component. = false
  //   fixture.detectChanges();
  //   expect(submitEl.nativeElement.).toBeFalsy();
  // })
it('status is Active',() =>{
  expect(component.status).toBe('Active')
} )


});
