import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TeamsPage } from '../pages/teams/teams';
import { SchedulePage } from '../pages/schedule/schedule';
import { StandingsPage } from '../pages/standings/standings';
import { ContactPage } from '../pages/contact/contact';
import { NewsDetailsPage } from '../pages/news-details/news-details';
import { TeamDetailsPage } from '../pages/team-details/team-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeamsPage,
    SchedulePage,
    StandingsPage,
    ContactPage,
    NewsDetailsPage,
    TeamDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeamsPage,
    SchedulePage,
    StandingsPage,
    ContactPage,
    NewsDetailsPage,
    TeamDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
