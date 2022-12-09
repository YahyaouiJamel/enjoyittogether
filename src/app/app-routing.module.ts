import { RevComponent } from './front/rev/rev.component';
import { FeedbackComponent } from './front/feedback/feedback.component';
import { UsersComponent } from './back/crud/users/users.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back/back/back.component';
import { AddcommentComponent } from './gestion/gestionCommentaire/addcomment/addcomment.component';
import { AddreponseComponent } from './gestion/gestionReponse/addreponse/addreponse.component';
import { AddavisComponent } from './gestion/gestionAvis/addavis/addavis.component';
import { ListcommentComponent } from './gestion/gestionCommentaire/listcomment/listcomment.component';
import { ListreponseComponent } from './gestion/gestionReponse/listreponse/listreponse.component';
import { ListavisComponent } from './gestion/gestionAvis/listavis/listavis.component';
import { AjoutCommentComponent } from './gestion/gestionCommentaire/ajout-comment/ajout-comment.component';
import { AjoutReponseComponent } from './gestion/gestionReponse/ajout-reponse/ajout-reponse.component';
import { AmisComponent } from './back/amis/amis.component';


const routes: Routes = [
  {path: 'crud',component: UsersComponent},
  {path: 'admin',component: BackComponent},
  {path:'home',loadChildren:()=>import('./front/front-routing.module').then(m=>m.FrontRoutingModule)},
  {path: 'addc',component: AddcommentComponent},
  {path: 'addr',component: AddreponseComponent},
  {path: 'adda',component: AddavisComponent},
  {path: 'listc',component: ListcommentComponent},
  {path: 'listr',component: ListreponseComponent},
  {path: 'lista',component: ListavisComponent},
  {path:'updateComment/:id',component: AddcommentComponent},
  {path: 'updateReponse/:id',component: AddreponseComponent},
  {path: 'addcc',component: AjoutCommentComponent},
  {path:'updateCommenta/:id',component: AjoutCommentComponent},
  {path:'updateRate/:id',component: AddavisComponent},
  {path: 'addrr',component: AjoutReponseComponent},
  {path:'updateRepons/:id',component: AjoutReponseComponent},
  {path:'ami',component: AmisComponent},
  {path:'feed',component: FeedbackComponent},
  {path:'rev',component: RevComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
