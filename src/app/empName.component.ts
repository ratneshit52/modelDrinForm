import { Component, OnInit } from '@angular/core';
import { EmpServiceProvider } from './emp.service';

@Component({
  selector: 'emp-name',
  templateUrl: 'EmpFolder/empName.html'
})

export class EmpNameComponent implements OnInit {
  empsDetail: any = [];

  constructor(private _empDetailData: EmpServiceProvider) {}
  ngOnInit() {
    this.empsDetail = this._empDetailData.getEmpData();
  };
}

