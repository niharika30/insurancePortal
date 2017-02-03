import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyPolicyPage } from '../my-policy/my-policy';
import { MyAgentPage } from '../my-agent/my-agent';
import { IdCardsPage } from '../id-cards/id-cards';
import { ContactUsPage } from '../contact-us/contact-us';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	showDiv: boolean = false;
	constructor(public navCtrl: NavController) {}

	toggleShowDiv() {
		console.log('fired');
		this.showDiv = !this.showDiv;
	}
	// push another page on to the navigation stack
	// causing the nav controller to transition to the new page
	// optional data can also be passed to the pushed page.
	//this.navCtrl.push(MyPolicyPage);
	
	myPolicyPage() {
		this.navCtrl.push(MyPolicyPage);
	}
	agentPage() {
		this.navCtrl.push(MyAgentPage);
	}
	idCardPage() {
		this.navCtrl.push(IdCardsPage);
	}
	contactUsPage() {
		this.navCtrl.push(ContactUsPage);
	}

}
