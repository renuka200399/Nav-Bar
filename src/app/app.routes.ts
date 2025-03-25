
import { Routes } from '@angular/router';
import { LoginComponent } from './../../../FIRST-APP/src/app/login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RemoteProctoringComponent } from './remote-proctoring/remote-proctoring.component';
import { PlansComponent } from './Institutions/plans/plans.component';
import { AwardsComponent } from './Recognition/awards/awards.component';
import { TestimonialsComponent } from './Customer/testimonials/testimonials.component';
import { SupportComponent } from './Help/support/support.component';
import { FeaturesComponent } from './Products/features/features.component';

export const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path : 'home',component:HomeComponent},
  { path : 'login',component:LoginComponent},
  { path : 'products',component:FeaturesComponent},
  { path : 'remote',component:RemoteProctoringComponent},
  { path : 'institutions',component:PlansComponent},
  { path : 'recognition',component:AwardsComponent},
  { path : 'customers',component:TestimonialsComponent},
  { path : 'help',component:SupportComponent},



];
