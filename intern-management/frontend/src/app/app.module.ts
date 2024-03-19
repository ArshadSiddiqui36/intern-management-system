import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { AddInternComponent } from './components/add-intern/add-intern.component';

import { HeaderComponent } from './components/header/header.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MaterialExampleModule} from '../material.module';
// import {DatepickerCustomIconExample} from './datepicker-custom-icon-example';
// import {BrowserAnimationsModule} from '@angular/platform browser/animations';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MaterialExampleModule} from '../material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainService } from './services/main.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DprComponent } from './components/dpr/dpr.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ViewDprComponent } from './view-dpr/view-dpr.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeaveThemeComponent } from './leave-theme/leave-theme.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ViewAttendenceComponent } from './view-attendence/view-attendence.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { TasksInternComponent } from './tasks-intern/tasks-intern.component';
import { TasksAdminComponent } from './tasks-admin/tasks-admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


import { TestingComponent } from './testing/testing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileCardComponent } from './components/dashboard/profile-card/profile-card.component';
import { AttendanceCardComponent } from './components/dashboard/attendance-card/attendance-card.component';
import { LeaveCardComponent } from './components/dashboard/leave-card/leave-card.component';
import { DprCardComponent } from './components/dashboard/dpr-card/dpr-card.component';
import { TaskCardComponent } from './components/dashboard/task-card/task-card.component';
import { EmployeeCardComponent } from './components/dashboard/employee-card/employee-card.component';
import { AnnouncementCardComponent } from './components/dashboard/announcement-card/announcement-card.component';
import { BirthdayWishesComponent } from './birthday-wishes/birthday-wishes.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AdminQueriesComponent } from './admin-queries/admin-queries.component';
// import {MatTabsModule} from '@angular/material/tabs';
// import { MatTabsModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminRegisterComponent,
    AddInternComponent,
    HeaderComponent,
    ApplyLeaveComponent,
    ForgotPasswordComponent,
    DprComponent,
    ProfileComponent,
    EditProfileComponent,
    LeaveThemeComponent,
    ViewDprComponent,
    AttendanceComponent,
    LeaveThemeComponent,
    ViewCoursesComponent,
    EmployeeDashboardComponent,
    ViewAttendenceComponent,
    ChangePasswordComponent,
    HomeComponent,
    TasksInternComponent,
    TasksAdminComponent,
    ContactUsComponent,
    TestingComponent,
    DashboardComponent,
    ProfileCardComponent,
    AttendanceCardComponent,
    LeaveCardComponent,
    DprCardComponent,
    TaskCardComponent,
    EmployeeCardComponent,
    AnnouncementCardComponent,
    BirthdayWishesComponent,
    AnnouncementsComponent,
    ChatbotComponent,
    AdminQueriesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // MatTabsModule,

    // BrowserAnimationsModule.
    // MatNativeDateModule,
    // MaterialExampleModule,

    HttpClientModule,
    NgxMaterialTimepickerModule
    // MatTabsModule

  ],
  providers: [
    MainService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true,
    }
  ],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
