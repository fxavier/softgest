import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public personalForm:FormGroup;
  public salutations = [
    { id: 1, name: 'Mr' },
    { id: 2, name: 'Mrs' } 
  ];
  public genders = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' } 
  ];
  public countries = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'Mexico' },
    { id: 4, name: 'UK' },
    { id: 5, name: 'France' },
    { id: 6, name: 'Italy' } 
  ];
  public states = [
    { id: 1, name: 'Arkansas' },
    { id: 2, name: 'Texas' },
    { id: 3, name: 'California' },
    { id: 4, name: 'Florida' },
    { id: 5, name: 'Other' } 
  ];
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      'salutation': [''],
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'gender': [''],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'phone': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'country': ['', Validators.required],
      'state' : [''],
      'address' : ['']
    });
  }

  public onSubmit(values:Object):void {
      if (this.personalForm.valid) {
          // this.router.navigate(['pages/dashboard']);
      }
  }
  

}

export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
  if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
  }
}
