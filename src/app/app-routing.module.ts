import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './homepage/home_elements/carousel/carousel.component';
import { PracticeComponent } from './homepage/home_elements/practice/practice.component';
import { ProjectComponent } from './homepage/home_elements/project/project.component';
import { FeatureComponent } from './homepage/home_elements/feature/feature.component';
import { CounterComponent } from './homepage/home_elements/counter/counter.component';
import { ExternalComponent } from './homepage/home_elements/external/external.component';
import { ContactComponent } from './homepage/home_elements/contact/contact.component';
import { FooterComponent } from './homepage/home_elements/footer/footer.component';
import { QstorageComponent } from './qstorage/qstorage.component';
import { QlistComponent } from './qpage/q_elements/qlist/qlist.component';
import { PjstorageComponent } from './pjstorage/pjstorage.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'homepage/home_elements', children:[
    {path: 'carousel', component: CarouselComponent},
    {path: 'practice', component: PracticeComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'feature', component: FeatureComponent},
    {path:'counter', component: CounterComponent},
    {path:'external', component: ExternalComponent},
    {path:'contact', component: ContactComponent},
    {path:'footer', component: FooterComponent}
  ]},
  {path: 'qstorage', component: QstorageComponent},
  {path: 'qpage/q_elements', children:[
    {path: 'qlist', component: QlistComponent},
  ]},
  {path: 'pjstorage', component: PjstorageComponent},
  {path: 'pjpage', children:[

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
