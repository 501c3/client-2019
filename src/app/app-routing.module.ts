import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {SummaryComponent} from './summary/summary.component';
import {PaymentComponent} from './payment/payment.component';
import {FinishComponent} from './finish/finish.component';
import {ParticipantsComponent} from './participants/participants.component';
import {EntriesComponent} from './entries/entries.component';
import {XtrasComponent} from './xtras/xtras.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'entries', component: EntriesComponent},
  {path: 'xtras', component: XtrasComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'finish', component: FinishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
