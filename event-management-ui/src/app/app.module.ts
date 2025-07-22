import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { ParticipantListComponent } from './components/participants/participant-list/participant-list.component';
import { ParticipantFormComponent } from './components/participants/participant-form/participant-form.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    EventListComponent,
    EventDetailComponent,
    EventFormComponent,
    ParticipantListComponent,
    ParticipantFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { 
        path: 'events', 
        component: EventListComponent,
        canActivate: [AuthGuard]
      },
      { 
        path: 'events/:id', 
        component: EventDetailComponent,
        canActivate: [AuthGuard]
      },
      { 
        path: 'events/:id/edit', 
        component: EventFormComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['ADMIN', 'ORGANIZER'] }
      },
      { 
        path: 'events/:id/participants', 
        component: ParticipantListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['ADMIN', 'ORGANIZER'] }
      },
      { 
        path: 'events/:id/register', 
        component: ParticipantFormComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['PARTICIPANT'] }
      },
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      { path: '**', redirectTo: '/events' }
    ]),
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }