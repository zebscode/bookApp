import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page3Page } from '../page3/page3';
import { ContentsPage } from '../contents/contents';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  page1 = Page1Page;
  page3 = Page3Page;
  contentsPage = ContentsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }
 image = ('https://consequenceofsound.net/wp-content/uploads/2014/10/screen-shot-2014-10-17-at-11-12-32-am.png?w=674');
 
}
