import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggedInLayoutComponent } from './layouts/logged-in-layout/logged-in-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginComponent } from './dashboard/pages/login/login.component';
import { SignUpComponent } from './dashboard/pages/sign-up/sign-up.component';
import { ContactUsComponent } from './dashboard/pages/contact-us/contact-us.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { CoursePreviewComponent } from './dashboard/components/course-preview/course-preview.component';
import { KaraokePreviewComponent } from './dashboard/components/karaoke-preview/karaoke-preview.component';
import { BoxCircleComponent } from './dashboard/components/box-circle/box-circle.component';
import { FaqComponent } from './dashboard/pages/faq/faq.component';
import { KaraokeComponent } from './dashboard/pages/karaoke/karaoke.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { AboutUsComponent } from './dashboard/pages/about-us/about-us.component';
import { PaymentCheckoutComponent } from './dashboard/pages/payment-checkout/payment-checkout.component';
import { BlogComponent } from './dashboard/pages/blog/blog.component';
import { HomeworkComponent } from './dashboard/pages/homework/homework.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';
import { MyCoursesComponent } from './dashboard/pages/my-courses/my-courses.component';
import { FooterComponent } from './dashboard/components/footer/footer.component';
import { FaqItemComponent } from './dashboard/components/faq-item/faq-item.component';
import { CoursePreviewBigComponent } from './dashboard/components/course-preview-big/course-preview-big.component';
import { BlogPreviewComponent } from './dashboard/components/blog-preview/blog-preview.component';
import { HomeworkVoiceComponent } from './dashboard/components/homework-voice/homework-voice.component';
import { CourseListSliderComponent } from './dashboard/components/course-list-slider/course-list-slider.component';
import { VideoPlayerComponent } from './dashboard/components/video-player/video-player.component';
import { SessionsListComponent } from './dashboard/components/sessions-list/sessions-list.component';
import { CourseDescriptionComponent } from './dashboard/components/course-description/course-description.component';
import { CurrentCourseComponent } from './dashboard/pages/current-course/current-course.component';
import { TagComponent } from './dashboard/components/tag/tag.component';
import { CustomButtonComponent } from './dashboard/components/custom-button/custom-button.component';
import { HomeworkDescComponent } from './dashboard/components/homework-desc/homework-desc.component';
import { CourseListComponent } from './dashboard/components/course-list/course-list.component';
import { VoicePlayerComponent } from './dashboard/components/voice-player/voice-player.component';
import { VoicesComponent } from './dashboard/components/voices/voices.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggedInLayoutComponent,
    LayoutComponent,
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    HomeComponent,
    CoursePreviewComponent,
    KaraokePreviewComponent,
    BoxCircleComponent,
    FaqComponent,
    KaraokeComponent,
    CoursesComponent,
    AboutUsComponent,
    PaymentCheckoutComponent,
    BlogComponent,
    HomeworkComponent,
    ProfileComponent,
    MyCoursesComponent,
    FooterComponent,
    FaqItemComponent,
    CoursePreviewBigComponent,
    BlogPreviewComponent,
    HomeworkVoiceComponent,
    CourseListSliderComponent,
    VideoPlayerComponent,
    SessionsListComponent,
    CourseDescriptionComponent,
    CurrentCourseComponent,
    TagComponent,
    CustomButtonComponent,
    HomeworkDescComponent,
    CourseListComponent,
    VoicePlayerComponent,
    VoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
