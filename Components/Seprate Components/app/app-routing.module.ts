import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternComponent } from './components/add-intern/add-intern.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DprComponent } from './components/dpr/dpr.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeaveThemeComponent } from './leave-theme/leave-theme.component';
import { ViewDprComponent } from './view-dpr/view-dpr.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TasksAdminComponent } from './tasks-admin/tasks-admin.component';
import { TasksInternComponent } from './tasks-intern/tasks-intern.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BirthdayWishesComponent } from './birthday-wishes/birthday-wishes.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';

new Date().getTime()
const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
  { path:'admin', component:LoginComponent  },
  {path:"interns",component:EmployeeDashboardComponent,canActivate:[AuthGuard] },
  { path: 'editprofile', component:EditProfileComponent,canActivate:[AuthGuard] },
  { path: 'addintern', component: AddInternComponent,canActivate:[AuthGuard],data: { roles:"Admin" } },
  { path: 'register', component: AdminRegisterComponent },
  { path: 'leave', component: ApplyLeaveComponent,canActivate:[AuthGuard],data: { roles:"Intern" }  },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'dpr', component: DprComponent,canActivate:[AuthGuard],data: { roles:"Intern" }  },
  { path: 'attendence', component: AttendanceComponent,canActivate:[AuthGuard],data: { roles:"Intern" }  },
  { path: 'adminleave', component: LeaveThemeComponent,canActivate:[AuthGuard],data: { roles:"Admin" }  },
  { path: 'courses', component: ViewCoursesComponent,canActivate:[AuthGuard]  },
  {path:"viewdpr",component:ViewDprComponent,canActivate:[AuthGuard],data: { roles:"Admin" } },
  {path:"viewattendence",component:ViewAttendenceComponent,canActivate:[AuthGuard],data: { roles:"Admin" } },
  {path:"changepassword",component:ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:"contact",component:ContactUsComponent ,canActivate:[AuthGuard] },
  {path:"admintask",component:TasksAdminComponent ,canActivate:[AuthGuard],data: { roles:"Admin" } },
  {path:"interntask",component:TasksInternComponent,canActivate:[AuthGuard],data: { roles:"Intern" } },
  {path:"dashboard",component:DashboardComponent},
  {path:"About",component:AboutUsComponent},
  {path:"birthday",component:BirthdayWishesComponent},
  {path:"addAnnouncement",component:AnnouncementsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
