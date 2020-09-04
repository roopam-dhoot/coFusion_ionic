import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FavoritesPage } from '../pages/favorites/favorites';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { MenuPage } from '../pages/menu/menu';
import {DishdetailPage} from '../pages/dishdetail/dishdetail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx'
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpModule } from '@angular/http';
import { baseurl } from '../shared/baseurl';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { ReservationPage } from '../pages/reservation/reservation';
import { CommentPage } from '../pages/comment/comment';
import { LoginPage } from '../pages/login/login';
import {IonicStorageModule} from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { RegisterPage } from '../pages/register/register';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    AboutPage,
    ContactPage,
    ReservationPage,
    MenuPage,
    DishdetailPage,
    FavoritesPage,
    CommentPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    MenuPage,
    DishdetailPage,
    ReservationPage,
    FavoritesPage,
    CommentPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    { provide: 'BaseURL', useValue: baseurl },
    SplashScreen,
    LocalNotifications,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    EmailComposer,
    SocialSharing,
    FavoriteProvider,
    Camera,
    CallNumber
  ]
})
export class AppModule {}
