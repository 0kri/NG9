import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { HobbysPageComponent } from './pages/hobbys-page/hobbys-page.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MembersDetailsPageComponent } from './pages/members-details-page/members-details-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/auth-page/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth-page/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListsListPageComponent } from './pages/lists-list-page/lists-list-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MembersPageComponent,
    ListsPageComponent,
    HobbysPageComponent,
    CardComponent,
    MembersDetailsPageComponent,
    AuthPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    ListsListPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
