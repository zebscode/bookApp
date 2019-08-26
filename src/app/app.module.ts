import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BookApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { ContentsPage } from '../pages/contents/contents';

@NgModule({
  declarations: [
    BookApp,
    HomePage,
    Page1Page,
    Page2Page,
    Page3Page,
    ContentsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BookApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BookApp,
    HomePage,
    ContentsPage,
    Page1Page,
    Page2Page,
    Page3Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
