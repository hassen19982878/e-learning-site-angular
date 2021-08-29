import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './components/private/admin/categories/category-add/category-add.component';
import { CategoryListComponent } from './components/private/admin/categories/category-list/category-list.component';
import { CategoryUpdateComponent } from './components/private/admin/categories/category-update/category-update.component';
import { StuduentAddComponent } from './components/private/admin/studuents/studuent-add/studuent-add.component';
import { StuduentListComponent } from './components/private/admin/studuents/studuent-list/studuent-list.component';
import { StuduentUpdateComponent } from './components/private/admin/studuents/studuent-update/studuent-update.component';
import { TeacherAddComponent } from './components/private/admin/teachers/teacher-add/teacher-add.component';
import { TeacherListComponent } from './components/private/admin/teachers/teacher-list/teacher-list.component';
import { TeacherUpdateComponent } from './components/private/admin/teachers/teacher-update/teacher-update.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CoursesComponent } from './components/public/courses/courses.component';
import { HomeComponent } from './components/public/home/home.component';
import { InstructorsComponent } from './components/public/instructors/instructors.component';
const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'courses',component:CoursesComponent},
{path:'instructors',component:InstructorsComponent},
{path:'dashboard',component:DashboardComponent},
{path:'categories-list',component:CategoryListComponent},
{path:'add-category',component:CategoryAddComponent},
{path:'category-update',component:CategoryUpdateComponent},
{path:'studuents-list',component:StuduentListComponent},
{path:'add-studuent',component:StuduentAddComponent},
{path:'studuent-update',component:StuduentUpdateComponent},
{path:'teachers-list',component:TeacherListComponent},
{path:'add-teacher',component:TeacherAddComponent},
{path:'teacher-update',component:TeacherUpdateComponent},
{path:'courses-list',component:TeacherListComponent},
{path:'add-course',component:TeacherAddComponent},
{path:'course-update',component:TeacherUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
