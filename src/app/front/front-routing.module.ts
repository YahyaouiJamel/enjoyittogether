
import { MessagesComponent } from './users/messages/messages.component';
import { ProfilComponent } from './users/profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front.component';
import { DealsFrontComponent } from './deals-front/deals-front.component';
import { AboutFrontComponent } from './about-front/about-front.component';
import { ReservationFrontComponent } from './reservation-front/reservation-front.component';
import { MessageComponent } from './message/message.component';
import { InvitationComponent } from './invitation/invitation.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../services/auth.guard';
import { AjoutvoyageComponent } from './ajoutvoyage/ajoutvoyage.component';


const routes: Routes = [
  {path: '',component: FrontComponent},
  {path: 'deals',component: DealsFrontComponent},
  {path: 'deals/ajoutvoyage',component:AjoutvoyageComponent },
  {path: 'about',component: AboutFrontComponent},
  {path: 'reservation',component: ReservationFrontComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'profil',component: ProfilComponent ,canActivate:[AuthGuard]},
  {path: 'messages',component: MessagesComponent},
  {path: 'invitation',component: InvitationComponent},
  {path: 'list',component: ListComponent},
  {path: 'msg',component: MessageComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
exports: [RouterModule]
})
export class FrontRoutingModule { }
