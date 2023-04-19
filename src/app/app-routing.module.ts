import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { TermsComponent } from './pages/terms/terms.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'privacy_policies',
    component: PrivacyPoliciesComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  // { path: 'about', component: AboutComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'booking', component: BookingComponent },
  { path: 'gallery', component: GalleryComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
