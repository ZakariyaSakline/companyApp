import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesInfoComponent} from '../employees/components/employees-info/employees-info.component';

const routes: Routes = [

  {
    path: '',
    component: EmployeesInfoComponent,
    // children: [
    //   {
    //     path: '',
    //     children: [
    //       { path: 'call', component: HttpCallComponent },
        
    //     ]
    //   }
    // ]   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
