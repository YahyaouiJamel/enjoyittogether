import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBackComponent } from './back/nav-back/nav-back.component';
import { SideBackComponent } from './back/side-back/side-back.component';
import { ContentBackComponent } from './back/content-back/content-back.component';
import { HeaderBackComponent } from './back/header-back/header-back.component';
import { FooterBackComponent } from './back/footer-back/footer-back.component';
import { BackComponent } from './back/back/back.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FrontModule } from './front/front.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersComponent } from './back/crud/users/users.component';
import { AddavisComponent } from './gestion/gestionAvis/addavis/addavis.component';
import { ListavisComponent } from './gestion/gestionAvis/listavis/listavis.component';
import { ListcommentComponent } from './gestion/gestionCommentaire/listcomment/listcomment.component';
import { ListreponseComponent } from './gestion/gestionReponse/listreponse/listreponse.component';
import { AjoutCommentComponent } from './gestion/gestionCommentaire/ajout-comment/ajout-comment.component';
import { AjoutReponseComponent } from './gestion/gestionReponse/ajout-reponse/ajout-reponse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmisComponent } from './back/amis/amis.component';
import { AddvoyageComponent } from './back/addvoyage/addvoyage.component';
import { ListvoyageComponent } from './back/listvoyage/listvoyage.component';
import { LowerCasePipe } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent,
    NavBackComponent,
    SideBackComponent,
    ContentBackComponent,
    HeaderBackComponent,
    FooterBackComponent,
    BackComponent,
    UsersComponent,
    AddavisComponent,
    ListavisComponent,
    ListcommentComponent,
    ListreponseComponent,
    AjoutCommentComponent,
    AjoutReponseComponent,
    AmisComponent,
    AddvoyageComponent,
    ListvoyageComponent
    
    
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    FrontModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    NgbModule,
 
    
  ],
  providers: [LowerCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
