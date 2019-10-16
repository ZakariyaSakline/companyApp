import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import { ShareDataService } from '../../../services/share-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EventEmitterService } from '../../../services/event-emitter.service';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  signupForm: FormGroup;
  localJsonData;

  constructor(
    public _dialogRef: MatDialogRef<AddEmployeesComponent>,
    private _formbilder: FormBuilder,
    private _shareDataService: ShareDataService,
    private _snackBar: MatSnackBar,
    private _eventEmitterService:EventEmitterService

  ) { }

  EmployeeInputData(): void {
    this.signupForm = this._formbilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      companyName: ['', Validators.required],
      employeeAge: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      employeeImage: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.EmployeeInputData();
  }

  employeeSubmit(signupForm: any): any {
    this.getEmployeeInputData(signupForm);
    // this.resetFrom();
  }

  getEmployeeInputData(signupForm: any): any {
    this.localJsonData=this._shareDataService.getLocalEmployee();
    let data = {
      'employeeId': signupForm.controls.employeeId.value,
      'employeeName': signupForm.controls.employeeName.value,
      'employeeAge': signupForm.controls.employeeAge.value,
      'employeeAddress': signupForm.controls.employeeAddress.value,
      'employeeImage': signupForm.controls.employeeImage.value
      }
    this.localJsonData.push(data);
    this._eventEmitterService.emitTableSubmitEvent(this.localJsonData);
    localStorage.setItem('newEmployeesInfo', JSON.stringify(this.localJsonData));
}

  // for snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onNoClick(): void {
    this._dialogRef.close();
  }
}
