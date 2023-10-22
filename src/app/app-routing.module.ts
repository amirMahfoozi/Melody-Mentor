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
import { AboutUsComponent } from './dashboard/pages/about-us/about-us.component';
import { HomeworkComponent } from './dashboard/pages/homework/homework.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';
import { ChangePasswordComponent } from './dashboard/components/change-password/change-password.component';
import { MyCoursesComponent } from './dashboard/pages/my-courses/my-courses.component';
import { PaymentCheckoutComponent } from './dashboard/pages/payment-checkout/payment-checkout.component';
import { authGuard } from './auth.guard';
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
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
    ]
  },

  {
    path: '',
    component: LoggedInLayoutComponent,
    children: [
      {
        path: 'contact-us',
        title: 'ارتباط با ما',
        component: ContactUsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'home',
        title: 'خانه',
        component: HomeComponent,
        canActivate: [authGuard],
      },
      {
        path: 'faq',
        title: 'سوالات متداول',
        component: FaqComponent,
        canActivate: [authGuard],
      },
      {
        path: 'courses',
        title: 'دوره ها',
        component: CoursesComponent,
        canActivate: [authGuard],
      },
      {
        path: 'course',
        title: 'دوره ',
        component: CurrentCourseComponent,
        canActivate: [authGuard],
      },
      {
        path: 'homework',
        title: 'homework ',
        component: HomeworkComponent,
        canActivate: [authGuard],
      },
      {
        path: 'profile',
        title: 'profile ',
        component: ProfileComponent,
        canActivate: [authGuard],
      },
      {
        path: 'my-courses',
        title: 'my-courses ',
        component: MyCoursesComponent,
        canActivate: [authGuard],
      },
      {
        path: 'payment',
        title: 'payment ',
        component: PaymentCheckoutComponent,
        canActivate: [authGuard],
      },
      {
        path: 'change-password',
        title: 'changePassword ',
        component: ChangePasswordComponent,
        canActivate: [authGuard],
      },
      {
        path: 'about-us',
        title: 'about-us ',
        component: AboutUsComponent,
        canActivate: [authGuard],
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
