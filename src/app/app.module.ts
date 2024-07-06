import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FirstPartComponent } from './pages/home/first-part/first-part.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { CaseStudiesComponent } from './pages/home/case-studies/case-studies.component';
import { OurProcessComponent } from './pages/home/our-process/our-process.component';
import { TeamComponent } from './pages/home/team/team.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { PlattformsComponent } from './pages/home/plattforms/plattforms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FirstPartComponent,
    ServicesComponent,
    CaseStudiesComponent,
    OurProcessComponent,
    TeamComponent,
    TestimonialsComponent,
    ContactUsComponent,
    PlattformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
