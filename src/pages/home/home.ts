import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { ContentsPage } from '../contents/contents';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  contentsPage = ContentsPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  // public onButtonClicked(): void {
  //   let modal = this.modalCtrl.create(ContentsPage);
  //   modal.present();
  // }
 
  title = "Ionic Cordova Book App";
  image = ('https://www.fillmurray.com/460/300');
 
}


 