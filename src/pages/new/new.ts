import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NotesService } from './../../providers/notes-service';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class New {

  value: any;
  sticker: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
            public notes_service: NotesService) {
    this.sticker = {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad New');
  }

  createNote(note){
    this.notes_service.createNote(this.sticker)
    .then((notes: Array<any> )=>{
      this.navCtrl.setRoot(HomePage);

    }, (error) => {
      console.log('Erro ao Carregar as Notas ', error)
      // this.loader.dismiss();
    })
  }

  clickExit() {
    this.navCtrl.setRoot(HomePage);
  }

  onChange(privacidade) {
    if (privacidade == 'type_public') {
      this.value = 0;
    } else if (privacidade == 'type_private'){
      this.value = 1;
    }
  }

}
