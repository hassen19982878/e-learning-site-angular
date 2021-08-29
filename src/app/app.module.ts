import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { HomeComponent } from './components/public/home/home.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { InstructorsComponent } from './components/public/instructors/instructors.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CategoryAddComponent } from './components/private/admin/categories/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/categories/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/categories/category-update/category-update.component';
import { TeacherAddComponent } from './components/private/admin/teachers/teacher-add/teacher-add.component';
import { TeacherListComponent } from './components/private/admin/teachers/teacher-list/teacher-list.component';
import { TeacherUpdateComponent } from './components/private/admin/teachers/teacher-update/teacher-update.component';
import { StuduentAddComponent } from './components/private/admin/studuents/studuent-add/studuent-add.component';
import { StuduentUpdateComponent } from './components/private/admin/studuents/studuent-update/studuent-update.component';
import { StuduentListComponent } from './components/private/admin/studuents/studuent-list/studuent-list.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CourseAddComponent } from './components/private/teacher/courses/course-add/course-add.component';
import { CourseListComponent } from './components/private/teacher/courses/course-list/course-list.component';
import { CourseUpdateComponent } from './components/private/teacher/courses/course-update/course-update.component';
import { LessonAddComponent } from './components/private/teacher/lessons/lesson-add/lesson-add.component';
import { LessonListComponent } from './components/private/teacher/lessons/lesson-list/lesson-list.component';
import { LessonUpdateComponent } from './components/private/teacher/lessons/lesson-update/lesson-update.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CoursesComponent,
    InstructorsComponent,
    ContactComponent,
    SidebarComponent,
    DashboardComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    TeacherAddComponent,
    TeacherListComponent,
    TeacherUpdateComponent,
    StuduentAddComponent,
    StuduentUpdateComponent,
    StuduentListComponent,
    TopbarComponent,
    CourseAddComponent,
    CourseListComponent,
    CourseUpdateComponent,
    LessonAddComponent,
    LessonListComponent,
    LessonUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
