import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdjustmentPage } from '../pages/adjustment/adjustment';
import { SummaryPage } from '../pages/summary/summary';
import { MashPage } from '../pages/mash/mash';
import { SpargePage } from '../pages/sparge/sparge';
import { WaterReportPage } from '../pages/water-report/water-report';

@NgModule({
  declarations: [
    MyApp,
    AdjustmentPage,
    MashPage,
    SpargePage,
    SummaryPage,
    WaterReportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdjustmentPage,
    MashPage,
    SpargePage,
    SummaryPage,
    WaterReportPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
