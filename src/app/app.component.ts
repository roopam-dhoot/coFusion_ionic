import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav ,ModalController,LoadingController} from 'ionic-angular';
import { Network } from '@ionic-native/network/ngx';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { MenuPage } from '../pages/menu/menu';
import { ReservationPage } from '../pages/reservation/reservation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesPage } from '../pages/favorites/favorites';
import {LoginPage} from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string,icon:string, component: any}>;
  loading: any = null;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl:ModalController,
    private loadingCtrl: LoadingController,
    private network: Network
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'home',icon:'home', component: HelloIonicPage },
      {title:'About us',icon:'information-circle',component:AboutPage},
      {title:'Contact us',icon:'contact',component:ContactPage},
      {title:'Menu',icon:'list-box',component:MenuPage},
      {title:'favorite',icon:'heart',component:FavoritesPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.network.onDisconnect().subscribe(() => {
      //   if (!this.loading) {
      //     this.loading = this.loadingCtrl.create({
      //       content: 'Network Disconnected'
      //     });
      //     this.loading.present();
      //   }
      // });
    });
    // this.network.onConnect().subscribe(() => {

    //   // We just got a connection but we need to wait briefly
    //   // before we determine the connection type. Might need to wait.
    //   // prior to doing any api requests as well.
    //   setTimeout(() => {
    //     if (this.network.type === 'wifi') {
    //       console.log('we got a wifi connection, woohoo!');
    //     }
    //   }, 3000);
    //   if (this.loading) {
    //     this.loading.dismiss();
    //     this.loading = null;
    //   }
    // });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  openReserve() {

    let modal = this.modalCtrl.create(ReservationPage);
    modal.present();
  }
  openLogin() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
