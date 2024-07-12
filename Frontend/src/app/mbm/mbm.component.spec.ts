import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MbmComponent } from './mbm.component';

describe('MbmComponent', () => {
  let component: MbmComponent;
  let fixture: ComponentFixture<MbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ MbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Button click event is working checked using spyon', fakeAsync(() =>{
    spyOn(component,'searchResult');
  
   let btn = fixture.debugElement.query(By.css('button')).nativeElement.click();
  
    expect(component.searchResult).toHaveBeenCalled();
  
   }))
});
