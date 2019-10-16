import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';
import { ShareDataService} from '../../../services/share-data.service';
import { EventEmitterService } from '../../../services/event-emitter.service';
import{ EditTableInfoComponent } from '../../components/edit-table-info/edit-table-info.component';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  jasonData;
  displayedColumns;
  dataSource;


  constructor(
    public _dialog: MatDialog,
    private _shareDataService:ShareDataService,
    private _eventEmitterService:EventEmitterService

  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 


  ngOnInit() {
    this.jasonData= this._shareDataService.getLocalEmployee();
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName','employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._eventEmitterService.getTableUpdateRowEvent().subscribe(newEmployeeInfo=>{
      this.reloadTableForAddRow(newEmployeeInfo);
    });

    this._eventEmitterService.getEditEvent().subscribe(afterEditData =>{
      debugger;
      this.reloadTableRowForEditData(afterEditData);
    });
  }


  openAddEmployeeDialog(): void {
    const dialogRef = this._dialog.open(AddEmployeesComponent, {
      width: '650px',height:'700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
    });
  }

  openEditEmployeeDialog(employeeInfo): void {
    const dialogRef = this._dialog.open(EditTableInfoComponent, {
      data :employeeInfo,
      width: '650px',height:'700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The EditEmployee dialog was closed');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTableForAddRow(newEmployeeInfo){
    this.jasonData= newEmployeeInfo;
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName','employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  reloadTableRowForEditData(afterEditData){
    this.jasonData= this._shareDataService.getLocalEmployee();
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName','employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  confirmDeleteEmployee(element) {
    if (confirm("Are you sure?")) {
       this.deleteEmployeeTableRow(element);
    } else {
    }
  }

  deleteEmployeeTableRow(element):any{
    let dataTable=this.jasonData;
      for(let i=0; i<dataTable.length; i++){
        if(dataTable[i].employeeId == element.employeeId){
            let indexValue=dataTable.indexOf(dataTable[i]);
              dataTable.splice(indexValue ,1);
              this.dataSource = new MatTableDataSource(this.jasonData);
              localStorage.setItem("newEmployeesInfo" , JSON.stringify(dataTable));
      }
    }
   return this.jasonData;
  }




}
