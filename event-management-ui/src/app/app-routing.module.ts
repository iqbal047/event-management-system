// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/auth/login/login.component';
// import { RegisterComponent } from './components/auth/register/register.component';
// import { EventListComponent } from './components/events/event-list/event-list.component';
// import { EventFormComponent } from './components/events/event-form/event-form.component';
// import { ParticipantListComponent } from './components/participants/participant-list/participant-list.component';
// import { ParticipantFormComponent } from './components/participants/participant-form/participant-form.component';
// import { AuthGuard } from './guards/auth.guard';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'events', component: EventListComponent, canActivate: [AuthGuard] },
//   { path: 'events/create', component: EventFormComponent, canActivate: [AuthGuard] },
//   { path: 'events/edit/:id', component: EventFormComponent, canActivate: [AuthGuard] },
//   { path: 'participants', component: ParticipantListComponent, canActivate: [AuthGuard] },
//   { path: 'participants/register/:eventId', component: ParticipantFormComponent, canActivate: [AuthGuard] },
//   { path: 'participants/edit/:id', component: ParticipantFormComponent, canActivate: [AuthGuard] },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { EventFormComponent } from './components/events/event-form/event-form.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { ParticipantFormComponent } from './components/participants/participant-form/participant-form.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'events', component: EventListComponent, canActivate: [AuthGuard] },
  { path: 'events/new', component: EventFormComponent, canActivate: [AuthGuard] },
  { path: 'events/edit/:id', component: EventFormComponent, canActivate: [AuthGuard] },
  { path: 'participants/new/:eventId', component: ParticipantFormComponent, canActivate: [AuthGuard] },
  { path: 'participants/edit/:id', component: ParticipantFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }