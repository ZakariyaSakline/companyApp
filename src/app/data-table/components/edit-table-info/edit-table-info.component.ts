import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import{ShareDataService} from '../../../services/share-data.service';
import { EventEmitterService } from '../../../services/event-emitter.service';

@Component({
  selector: 'app-edit-table-info',
  templateUrl: './edit-table-info.component.html',
  styleUrls: ['./edit-table-info.component.css']
})
export class EditTableInfoComponent implements OnInit {

  signupForm: FormGroup;
  updateData;

  constructor(
    private _formbilder : FormBuilder,
    private _shareDataService : ShareDataService,
    private _eventEmitterService : EventEmitterService,
    public _dialogRef : MatDialogRef<EditTableInfoComponent>,
    private _snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  EmployeeInputData(): void {
    this.signupForm = this._formbilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      employeeAge: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      employeeImage: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.EmployeeInputData();
    this.data;
    this.signupForm.setValue({
      "employeeId":this.data.employeeId,
      "employeeName":this.data.employeeName,
      "employeeAge":this.data.employeeAge,
      "employeeAddress":this.data.employeeAddress,
      "employeeImage":this.data.employeeImage
  });
  }

  afterEditUpdateValue(signupForm:any){
    this.updateData={
        'employeeId':signupForm.controls.employeeId.value,
        'employeeName':signupForm.controls.employeeName.value,
        'employeeAge':signupForm.controls.employeeAge.value,
        'employeeAddress':signupForm.controls.employeeAddress.value,
        'employeeImage':signupForm.controls.employeeImage.value
    }
    return this.updateData;
}

updateEmployeeInfo(signupForm:any):any{  
  let localData=this._shareDataService.getLocalEmployee();
      for(let i=0; i<localData.length; i++){
        if(localData[i].employeeId ==  this.data.employeeId ){
            let indexValue=localData.indexOf(localData[i]);
            localData. splice(indexValue ,1, this.afterEditUpdateValue(signupForm));
            localStorage.setItem('newEmployeesInfo', JSON.stringify(localData));
          }
      }	
  // this.resetFrom();
  this._eventEmitterService.emitEditEvent(signupForm.value);
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 3000,
  });
}
onNoClick(): void {
  this._dialogRef.close();
}






}
