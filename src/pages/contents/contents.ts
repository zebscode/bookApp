import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, ModalController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';

export class Page {
  id: number;
  name: string;
  content: string;
}

@IonicPage()
@Component({
  selector: 'page-contents',
  templateUrl: 'contents.html',
})
export class ContentsPage {

  page1 = Page1Page;
  page2 = Page2Page;
  page3 = Page3Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentsPage');
  }

  public onButtonClicked(): void {
    this.viewCtrl.dismiss();
  }

}
