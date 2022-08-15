import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeListComponent,
      },
      {
        path: 'add',
        component: EmployeeAddComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
