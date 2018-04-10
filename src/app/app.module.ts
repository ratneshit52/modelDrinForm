import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { EmpNameComponent } from './empName.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, EmpNameComponent ],
  bootstrap:    [ AppComponent, EmpNameComponent ]
})
export class AppModule { }
