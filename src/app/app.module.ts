import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { New } from '../pages/new/new';
import { Modalnotes } from '../pages/modalnotes/modalnotes';

import { NotesService } from './../providers/notes-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    New,
    Modalnotes
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    New,
    Modalnotes
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
