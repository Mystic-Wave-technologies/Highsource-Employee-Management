import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AdminAttendanceDetailsComponent } from './admin-attendance-details/admin-attendance-details.component';

export const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"adminHome",
    component:AdminHomeComponent
  },
  {
    path:"addEmployee",
    component:AddEmployeeComponent
  },
  {
    path:"employeeDetails",
    component:EmployeeDetailsComponent
  },
  {
    path:"adminAttendanceDetails",
    component:AdminAttendanceDetailsComponent
  },
  {
    path:"**",
    component:LoginComponent
  },

];
