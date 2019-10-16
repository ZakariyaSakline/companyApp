import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/Dashboard',
    pathMatch: 'full'
  },
  {
    path:'Dashboard',
    loadChildren:'./company/company.module#CompanyModule'
  },
  {
    path:'Employees',
    loadChildren:'./employees/employees.module#EmployeesModule'
  },
  {
    path:'EmployeesDataTable',
    loadChildren:'./data-table/data-table.module#DataTableModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
