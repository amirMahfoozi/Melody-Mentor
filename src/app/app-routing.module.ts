import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginComponent } from './dashboard/pages/login/login.component';
import { SignUpComponent } from './dashboard/pages/sign-up/sign-up.component';
import { LoggedInLayoutComponent } from './layouts/logged-in-layout/logged-in-layout.component';
import { ContactUsComponent } from './dashboard/pages/contact-us/contact-us.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { FaqComponent } from './dashboard/pages/faq/faq.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { CurrentCourseComponent } from './dashboard/pages/current-course/current-course.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'ورود',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'ثبت نام',
    component: SignUpComponent,
  },
  {
    path: 'contact-us',
    title: 'ارتباط با ما',
    component: ContactUsComponent,
  },
  {
    path: 'home',
    title: 'خانه',
    component: HomeComponent,
  },
  {
    path: 'faq',
    title: 'سوالات متداول',
    component: FaqComponent,
  },
  {
    path: 'courses',
    title: 'دوره ها',
    component: CoursesComponent,
  },
  {
    path: 'course',
    title: 'دوره ',
    component: CurrentCourseComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
