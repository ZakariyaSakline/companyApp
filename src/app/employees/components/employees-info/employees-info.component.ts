import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../services/share-data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';
import { EventEmitterService }from '../../../services/event-emitter.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {

  employeeInfo:any;
  constructor(
    private _shareData :ShareDataService,
    public _dialog : MatDialog,
    private _eventEmitterService : EventEmitterService

  ) { }

  ngOnInit() {

    this._shareData.getEmployeeInfoApi().subscribe(employeeData=>{
      this.employeeInfo=employeeData
    })
  }

  openEmployeeDetailsDialog(employee): void {
    const dialogRef = this._dialog.open(EmployeeDetailsComponent, {
      data : employee,
      width: '700px',height: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The EmployeeDetails dialog was closed');
    });
  }

  // dataSource = new MatTableDataSource(this.employeeInfo);
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }








}
