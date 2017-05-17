import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Modalnotes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modalnotes',
  templateUrl: 'modalnotes.html',
})
export class Modalnotes {

  note: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public viewctrl: ViewController) {
  this.note = navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modalnotes');
  }

  clickExit(){
    this.viewctrl.dismiss();
  }

}
