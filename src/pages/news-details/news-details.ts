import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  singleNew: any;

  constructor(public nav: NavController, 
              public navParams: NavParams) 
  {
      this.singleNew = navParams.data;
      console.log('SingleNew: ', this.singleNew);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
  }

  goHome() {
      this.nav.popToRoot();
  }
}
