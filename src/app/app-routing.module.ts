import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { CourseComponent } from './component/course/course.component';



const routes: Routes = [
 {
  path:'',
  component:HomeComponent
 },
 {
  path:'courses',
  component:HomeComponent
 },
 {
  path:'about',
  component:AboutComponent
 },
 {
  path:'courses/:id',
  component:CourseComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
