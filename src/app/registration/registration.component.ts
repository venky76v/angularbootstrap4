import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: NgbDateStruct = null,
    public email: string = '',
    public password: string = '',
    public country: string = 'Select country'
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrations: Registration[] = [];
  regModel: Registration;
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  countries: string[] = ['US', 'UK', 'India', 'UAE'];

  constructor() {
    this.registrations.push(new Registration('Johan', 'Peter', {year: 1980, month: 5, day: 12}, 'johan@gmail.com', 'johan123', 'UK'));
    this.registrations.push(new Registration('Mohamed', 'Tariq', {year: 1975, month: 12, day: 3}, 'tariq@gmail.com', 'tariq123', 'UAE'));
    this.registrations.push(new Registration('Nirmal', 'Kumar', {year: 1970, month: 7, day: 25}, 'nirmal@gmail.com', 'nirmal123', 'India'));
  }

  ngOnInit() {
  }

  onNew() {
    this.regModel = new Registration();
    this.submitType = 'Save';
    this.showNew = true;
  }

  onSave() {
    if (this.submitType === 'Save') {
      this.registrations.push(this.regModel);
    } else {
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      this.registrations[this.selectedRow].country = this.regModel.country;
    }
    this.showNew = false;
  }

  onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Registration();
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  onDelete(index: number) {
    this.registrations.splice(index, 1);
  }

  onCancel() {
    this.showNew = false;
  }

  onChangeCountry(country: string) {
    this.regModel.country = country;
  }
}
