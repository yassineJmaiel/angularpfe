import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AjouterclientComponent } from './ajouterclient/ajouterclient.component';
import { ListclientComponent } from './listclient/listclient.component';
import { ModifierclientComponent } from './modifierclient/modifierclient.component';
import { AjouterfournisseurComponent } from './ajouterfournisseur/ajouterfournisseur.component';
import { ListefournisseurComponent } from './listefournisseur/listefournisseur.component';
import { ModifierfournisseurComponent } from './modifierfournisseur/modifierfournisseur.component';
import { AjouterarticleComponent } from './ajouterarticle/ajouterarticle.component';
import { ListearticlesComponent } from './listearticles/listearticles.component';
import { ModifierarticleComponent } from './modifierarticle/modifierarticle.component';
import { AjouterbdlComponent } from './ajouterbdl/ajouterbdl.component';
import { ModifierbdlComponent } from './modifierbdl/modifierbdl.component';
import { ListebdlComponent } from './listebdl/listebdl.component';
import { AjouterbdcComponent } from './ajouterbdc/ajouterbdc.component';
import { ModifierbdcComponent } from './modifierbdc/modifierbdc.component';
import { ListebdcComponent } from './listebdc/listebdc.component';
import { AjouterbdsComponent } from './ajouterbds/ajouterbds.component';
import { ModifierbdsComponent } from './modifierbds/modifierbds.component';
import { ListebdsComponent } from './listebds/listebds.component';
import { AjouterbdrComponent } from './ajouterbdr/ajouterbdr.component';
import { ModifierbdrComponent } from './modifierbdr/modifierbdr.component';
import { ListebdrComponent } from './listebdr/listebdr.component';


import { ListefactureComponent } from './listefacture/listefacture.component';

import { ModifierfactureFournisseurComponent } from './modifierfacture-fournisseur/modifierfacture-fournisseur.component';
import { ListefactureFournisseurComponent } from './listefacture-fournisseur/listefacture-fournisseur.component';
import { ModifiermouvementComponent } from './modifiermouvement/modifiermouvement.component';
import { AjoutermouvementComponent } from './ajoutermouvement/ajoutermouvement.component';
import { AjouterfactureComponent } from './ajouterfacture/ajouterfacture.component';
import { AjouterfactureFournisseurComponent } from './ajouterfacture-fournisseur/ajouterfacture-fournisseur.component';
import { AjouterdevisComponent } from './ajouterdevis/ajouterdevis.component';
import { ModifierdevisComponent } from './modifierdevis/modifierdevis.component';
import { ListedevisComponent } from './listedevis/listedevis.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { EditFactureComponent } from './edit-facture/edit-facture.component';
import { AfficherbdcComponent } from './afficherbdc/afficherbdc.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AjouterclientComponent,
    ListclientComponent,
    ModifierclientComponent,
    AjouterfournisseurComponent,
    ListefournisseurComponent,
    ModifierfournisseurComponent,
    AjouterarticleComponent,
    ListearticlesComponent,
    ModifierarticleComponent,
    AjouterbdlComponent,
    ModifierbdlComponent,
    ListebdlComponent,
    AjouterbdcComponent,
    ModifierbdcComponent,
    ListebdcComponent,
    AjouterbdsComponent,
    ModifierbdsComponent,
    ListebdsComponent,
    AjouterbdrComponent,
    ModifierbdrComponent,
    ListebdrComponent,
   
   
    ListefactureComponent,
    
    ModifierfactureFournisseurComponent,
    ListefactureFournisseurComponent,
   
    ModifiermouvementComponent,
    AjoutermouvementComponent,
    AjouterfactureComponent,
    AjouterfactureFournisseurComponent,
    AjouterdevisComponent,
    ModifierdevisComponent,
    ListedevisComponent,
    InscriptionComponent,
    EditFactureComponent,
    AfficherbdcComponent,
    AcceuilComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
