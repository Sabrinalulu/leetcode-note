import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './homepage/home_elements/footer/footer.component';
import { CarouselComponent } from './homepage/home_elements/carousel/carousel.component';
import { PracticeComponent } from './homepage/home_elements/practice/practice.component';
import { ProjectComponent } from './homepage/home_elements/project/project.component';
import { FeatureComponent } from './homepage/home_elements/feature/feature.component';
import { CounterComponent } from './homepage/home_elements/counter/counter.component';
import { ExternalComponent } from './homepage/home_elements/external/external.component';
import { ContactComponent } from './homepage/home_elements/contact/contact.component';
import { QstorageComponent } from './qstorage/qstorage.component';
import { QlistComponent } from './qpage/q_elements/qlist/qlist.component';
import { PjstorageComponent } from './pjstorage/pjstorage.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    PracticeComponent,
    ProjectComponent,
    FeatureComponent,
    CounterComponent,
    ExternalComponent,
    ContactComponent,
    QstorageComponent,
    QlistComponent,
    PjstorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
