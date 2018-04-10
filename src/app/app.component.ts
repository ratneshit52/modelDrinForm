import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpServiceProvider } from './emp.service';

@Component({
  selector: 'my-app',
  template: `<emp-name></emp-name>`,
  providers: [EmpServiceProvider]
})
export class AppComponent  {
  // userForms = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   email: new FormControl(),
  //   age: new FormControl(),
  //   fulladdress: new FormGroup({
  //     address: new FormControl(),
  //     place: new FormControl(),
  //     pincode: new FormControl()
  //   })
  // });
  // onSubmit() {
  //   console.log(this.userForms.value);
  // }
}
