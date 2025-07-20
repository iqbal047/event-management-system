import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ParticipantFormComponent } from './components/participants/participant-form/participant-form.component';
import { ParticipantListComponent } from './components/participants/participant-list/participant-list.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ParticipantFormComponent,
    ParticipantListComponent,
    EventListComponent,
    EventFormComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
