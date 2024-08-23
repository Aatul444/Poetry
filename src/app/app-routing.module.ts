import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { TermsComponent } from './pages/terms/terms.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { UtubeKhazanaComponent } from './pages/utube-khazana/utube-khazana.component';
import { FullteamComponent } from './pages/fullteam/fullteam.component';
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
  { path: 'first', component: LoaderComponent },
  { path: '', component: HomeComponent },
  {
    path: 'privacy_policies',
    component: PrivacyPoliciesComponent,
  },
  { path: 'terms',component: TermsComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'team', component: FullteamComponent },
  { path: 'U-tube', component: UtubeKhazanaComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
