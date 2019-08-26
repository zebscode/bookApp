import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { HomePage } from '../home/home';
import { ContentsPage } from '../contents/contents';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
 page2 = Page2Page;
 home = HomePage;
 contentsPage = ContentsPage;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  image = ('https://www.fillmurray.com/200/300');
 
}
