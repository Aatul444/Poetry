import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CarouselModule } from './carousel/carousel.module';
import { HttpClientModule } from '@angular/common/http';
import { UTubeStreamerComponent } from './components/u-tube-streamer/u-tube-streamer.component';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { GoogleMapsModule } from '@angular/google-maps';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UTubeStreamerComponent,
    PrivacyPoliciesComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    CarouselModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
