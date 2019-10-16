import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component'

const routes: Routes = [
  {
    path: '',
    component: EmployeeTableComponent,
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
export class DataTableRoutingModule { }
