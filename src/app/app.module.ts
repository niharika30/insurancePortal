import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyPolicyPage } from '../pages/my-policy/my-policy';
import { MyAgentPage } from '../pages/my-agent/my-agent';
import { IdCardsPage } from '../pages/id-cards/id-cards';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';
import { HomePolicyPage } from '../pages/home-policy/home-policy';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyPolicyPage,
    MyAgentPage,
    IdCardsPage,
    ContactUsPage,
    Page1,
    Page2,
    LoginPage,
    HomePolicyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyPolicyPage,
    MyAgentPage,
    IdCardsPage,
    ContactUsPage,
    Page1,
    Page2,
    LoginPage,
    HomePolicyPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService ]
})
export class AppModule {}
