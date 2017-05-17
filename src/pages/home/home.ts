import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ViewController} from 'ionic-angular';
import { New } from '../new/new';
import { AlertController } from 'ionic-angular';
import { NotesService } from './../../providers/notes-service';
import { Modalnotes } from '../modalnotes/modalnotes'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: any;
  note: any;
  notesSearch: any;
  count: any;
  searchQuery: string = '';
  text: string = '';
  textSerach: string = 'Minhas Notas';
  loader: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
              public loadingCtrl: LoadingController, public notes_service: NotesService,
              public modalCtrl: ModalController) {
                this.getNotas();
  }


  getNotas() {
      this.loader = this.loadingCtrl.create({
        content: "Aguarde ...",
        duration: 10000
      });

      this.loader.present();

      this.notes_service.getNotes()
      .then((notes: Array<any> )=>{

        this.notes = notes;
        this.notesSearch = notes;
        this.count = Object.keys(this.notes).length
        this.text = this.textSerach;
        this.loader.dismiss();
      }, (error) => {
        console.log('Erro ao Carregar as Notas ', error)
        this.loader.dismiss();
      })
    }

    deleteNote(item){
      this.notes_service.deleteNote(item)
      .then((notes: Array<any> )=>{
        this.getNotas();
      }, (error) => {
        console.log('Erro ao Carregar as Notas ', error)

      })
    }

    getItems(ev: any) {

      this.notes = this.notesSearch;
      this.text = this.textSerach;
      this.count = this.count = Object.keys(this.notes).length

      let val = ev.target.value;

      if (val && val.trim() != '') {
        this.text = 'Encontrados ';
        this.notes = this.notes.filter((item) => {
          if (item.name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1){
            return item
          }
        })
        this.count = Object.keys(this.notes).length
      }
    }

  openNew() {
    this.navCtrl.setRoot(New);
  }

  showAlert(item) {
    let alert = this.alertCtrl.create({
      title: item.name,
      subTitle: item.body,
      buttons: ['OK']
    });
    alert.present();

    this.notes_service.updateCountNote(item)
    .then((notes: Array<any> )=>{
      // this.note = notes;
      this.getNotas();
    }, (error) => {
      console.log('Erro ao Carregar as Nota ', error)
      this.loader.dismiss();
    })

  }

  showLogin(item) {
    let item_obj = item;
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Essa nota é privada. Digite sua senha para ler a nota.",
      inputs: [
        {
          name: 'title',
          placeholder: 'Senha',

        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Entrar',
          handler: data => {
            console.log('Saved clicked');
            console.log(data);
            this.openModal(item_obj);
          }
        }
      ]
    });
    prompt.present();
  }

  openNote(item){
    if (!this.testType(item)){
      this.showLogin(item);
    }else{
      this.openModal(item);
    }
  }

  openModal(item) {
    let modal = this.modalCtrl.create(Modalnotes, {"note": item});
    modal.present();
    this.notes_service.updateCountNote(item)
    .then((notes: Array<any> )=>{
      this.getNotas();
    }, (error) => {
      console.log('Erro ao Carregar as Nota ', error)
      this.loader.dismiss();
    })

  }

  testView(item){
    return !(item.fist_view === null || item.fist_view.trim().length === 0)
  }

  testType(item){
    return (item.type_note == "type_public");
  }


}
