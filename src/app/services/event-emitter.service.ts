import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

    addTableNewRow:EventEmitter<any>= new EventEmitter();
    editTableRow:EventEmitter<any>= new EventEmitter();
    employeeDetails:EventEmitter<any>= new EventEmitter();


    emitTableSubmitEvent(employeeInfo:any){
      this.addTableNewRow.emit(employeeInfo);
    }
    getTableUpdateRowEvent(){
      return this.addTableNewRow;
    }


    emitEditEvent(editTableInfo:any){
      debugger;
      this.editTableRow.emit(editTableInfo);
    }
    getEditEvent(){
      return this.editTableRow;
    }


    emitEmployeeDetails(employee:any){
      debugger;
      this.employeeDetails.emit(employee);
    }
    getEmployeeDetails(){
      debugger;
      return this.employeeDetails;
    }




}
