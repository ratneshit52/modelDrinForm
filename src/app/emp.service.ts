import { Injectable } from '@angular/core';

@Injectable()
export class EmpServiceProvider {
  getEmpData() {
    return [
      {'name': 'Ratnesh Shukla', 'age': 27, 'place': 'Pune', 'hobby': 'Driving'},
      {'name': 'Ranjana Tripathi', 'age': 28, 'place': 'Maihar', 'hobby': 'Writing'},
      {'name': 'Abhishesh Shukla', 'age': 24, 'place': 'Satna', 'hobby': 'Traveling'},
      {'name': 'Shivanshi Shukla', 'age': 21, 'place': 'Pune', 'hobby': 'Reading'}
    ]
  }
}
