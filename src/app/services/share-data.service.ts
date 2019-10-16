import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(
    private _http:HttpClient
  ) { }

employeeInfoApiUrl="../../assets/employeeInfo.json";
getEmployeeInfoApi(){
    return this._http.get(this.employeeInfoApiUrl);
}

getLocalEmployee():any{
  let localParseArray = JSON.parse(localStorage.getItem('newEmployeesInfo'));
    if (localParseArray) {
      return localParseArray;
    } else {
      return [];
      }
 }

}
