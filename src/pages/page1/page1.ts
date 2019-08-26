import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { HomePage } from '../home/home';
import { ContentsPage } from '../contents/contents';


/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {
  home = HomePage;
  page2 = Page2Page;
  contentsPage = ContentsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  public onButtonClicked(): void {
    this.viewCtrl.dismiss();
  }
  image = ('http://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p103861/billmurray.jpg');
}
