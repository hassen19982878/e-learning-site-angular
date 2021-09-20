import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { CategoryAddComponent } from './components/private/admin/categories/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/categories/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/categories/category-update/category-update.component';
import { StuduentListComponent } from './components/private/admin/studuents/studuent-list/studuent-list.component';
import { TeacherListComponent } from './components/private/admin/teachers/teacher-list/teacher-list.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { MyCoursesComponent } from './components/private/student/my-courses/my-courses.component';
import { MyLessonsComponent } from './components/private/student/my-lessons/my-lessons.component';
import { CourseAddComponent } from './components/private/teacher/courses/course-add/course-add.component';
import { CourseListComponent } from './components/private/teacher/courses/course-list/course-list.component';
import { CourseUpdateComponent } from './components/private/teacher/courses/course-update/course-update.component';
import { LessonAddComponent } from './components/private/teacher/lessons/lesson-add/lesson-add.component';
import { LessonListComponent } from './components/private/teacher/lessons/lesson-list/lesson-list.component';
import { LessonUpdateComponent } from './components/private/teacher/lessons/lesson-update/lesson-update.component';
import { AboutComponent } from './components/public/about/about.component';
import { CourseDetailsComponent } from './components/public/course-details/course-details.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { HomeComponent } from './components/public/home/home.component';
import { InstructorsComponent } from './components/public/instructors/instructors.component';
import { LoginInstructorComponent } from './components/public/login-instructor/login-instructor.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterInstructorComponent } from './components/public/register-instructor/register-instructor.component';
import { RegisterStudentComponent } from './components/public/register-student/register-student.component';
import { InstructorGuard } from './instructor.guard';
import { StudentGuard } from './student.guard';
const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'courses',component:CoursesComponent},
{path:'instructors',component:InstructorsComponent},
{path:'dashboard',component:DashboardComponent,
canActivate:[AuthGuard]
},
{path:'categories-list',component:CategoryListComponent,
canActivate:[AdminGuard]
},
{path:'add-category',component:CategoryAddComponent,
canActivate:[AdminGuard]
},
{path:'category-update/:id',component:CategoryUpdateComponent,
canActivate:[AdminGuard]
},
{path:'studuents-list',component:StuduentListComponent,
canActivate:[AdminGuard]
},
{path:'teachers-list',component:TeacherListComponent,
canActivate:[AdminGuard]
},
{path:'courses-list',component:CourseListComponent,
canActivate:[InstructorGuard]
},
{path:'add-course',component:CourseAddComponent,
canActivate:[InstructorGuard]
},
{path:'course-update/:id',component:CourseUpdateComponent,
canActivate:[InstructorGuard]
},
{path:'lessons-list',component:LessonListComponent,
canActivate:[InstructorGuard]
},
{path:'add-lesson',component:LessonAddComponent,
canActivate:[InstructorGuard]
},
{path:'lesson-update',component:LessonUpdateComponent,
canActivate:[InstructorGuard]
},
{path:'login',component:LoginComponent},
{path:"login-instructor",component:LoginInstructorComponent},

{path:'course-details/:id',component:CourseDetailsComponent,
},
{path:'about',component:AboutComponent},
{path:"registerStudent",component:RegisterStudentComponent},
{path:"registerInstructor",component:RegisterInstructorComponent},
{path:"login-instructor",component:LoginInstructorComponent},
{path:'my-courses',component:MyCoursesComponent,
canActivate:[StudentGuard]
},
{path:'my-lessons/:id',component:MyLessonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
