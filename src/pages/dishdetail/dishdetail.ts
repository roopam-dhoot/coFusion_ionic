import { Component,Inject } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ActionSheetController, ModalController  } from 'ionic-angular';
import {Dish} from '../../shared/dish';
import {Comment } from '../../shared/comment';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import { CommentPage } from '../../pages/comment/comment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
dish:Dish;
errMess:string;
avgstars:string;
numcomment:number;
favorite:boolean ;
constructor(public navCtrl: NavController, public navParams: NavParams,
  private socialSharing: SocialSharing,
  private toastCtrl: ToastController,
  @Inject('BaseURL') private baseurl,
  private actionSheetCtrl: ActionSheetController,
  private modalCtrl: ModalController ,
  private favoriteservice: FavoriteProvider){
    this.dish = navParams.get('dish');
    this.favorite = favoriteservice.isFavorite(this.dish.id);
  this.numcomment=this.dish.comments.length;
  let total=0;
  this.dish.comments.forEach(comment=>total+comment.rating);
  this.avgstars=(total/this.numcomment).toFixed(2)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }
  addToFavorites() {
    console.log('Adding to Favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added as favorite successfully',
      position: 'middle',
          duration: 3000}).present();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Add To Favorites',
          handler: () => {
            this.addToFavorites();
          }
        },
        {
          text: 'Share via Facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook(this.dish.name + ' -- ' + this.dish.description, this.baseurl + this.dish.image, '')
              .then(() => console.log('Posted successfully to Facebook'))
              .catch(() => console.log('Failed to post to Facebook'));
          }
        },
        {
          text: 'Share via twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter(this.dish.name + ' -- ' + this.dish.description, this.baseurl + this.dish.image, '')
              .then(() => console.log('Posted successfully to twitter'))
              .catch(() => console.log('Failed to post to twitter'));
          }
        },
        {
          text: 'Add Comment',
          handler: () => {
            console.log('Add Comment clicked');
            this.openCommentModal();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  openCommentModal() {
    let modal = this.modalCtrl.create(CommentPage);
    modal.onDidDismiss(comment => {
      console.log('Commnt added '+comment);
      if(comment) {
        this.dish.comments.push(comment);
      }
    });
    modal.present();
  }
}
