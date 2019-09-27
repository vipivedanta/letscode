import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';

const routes:Routes = [
	{ path : 'home', component : DashboardComponent },
	{ path : 'profile', component : ProfileComponent },
  { path : 'settings', component : SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
