import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePolicyPage } from '../home-policy/home-policy';

/*
  Generated class for the MyPolicy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-policy',
  templateUrl: 'my-policy.html'
})
export class MyPolicyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPolicyPage');
  }

  homePage() {
   
      this.navCtrl.push(HomePolicyPage);
   
  }


}
