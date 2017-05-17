import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Modalnotes } from './modalnotes';

@NgModule({
  declarations: [
    Modalnotes,
  ],
  imports: [
    IonicPageModule.forChild(Modalnotes),
  ],
  exports: [
    Modalnotes
  ]
})
export class ModalnotesModule {}
