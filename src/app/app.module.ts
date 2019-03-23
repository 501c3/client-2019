import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { ParticipantComponent } from './participant/participant.component';
import { TeamComponent } from './team/team.component';
import { EntryComponent } from './entry/entry.component';
import { XtraComponent } from './xtra/xtra.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { RecoverComponent } from './recover/recover.component';
import { ContactComponent } from './contact/contact.component';
import { FinishComponent } from './finish/finish.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule} from 'ngx-mask';
import { ParticipantsComponent } from './participants/participants.component';
import { EntriesComponent } from './entries/entries.component';
import { XtrasComponent } from './xtras/xtras.component';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    NavigatorComponent,
    HomeComponent,
    ParticipantComponent,
    TeamComponent,
    EntryComponent,
    XtraComponent,
    PaymentComponent,
    SummaryComponent,
    RecoverComponent,
    ContactComponent,
    FinishComponent,
    ParticipantsComponent,
    EntriesComponent,
    XtrasComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
