import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterclientComponent } from './ajouterclient/ajouterclient.component';
import { ListclientComponent } from './listclient/listclient.component';
import { ModifierclientComponent } from './modifierclient/modifierclient.component';
import { AjouterfournisseurComponent } from './ajouterfournisseur/ajouterfournisseur.component';
import { ListefournisseurComponent } from './listefournisseur/listefournisseur.component';
import { AjoutermouvementComponent } from './ajoutermouvement/ajoutermouvement.component';
import { AjouterarticleComponent } from './ajouterarticle/ajouterarticle.component';
import { ListearticlesComponent } from './listearticles/listearticles.component';
import { ModifierarticleComponent } from './modifierarticle/modifierarticle.component';
import { ListebdlComponent } from './listebdl/listebdl.component';
import { ListebdsComponent } from './listebds/listebds.component';
import { ListedevisComponent } from './listedevis/listedevis.component';
import { ListebdrComponent } from './listebdr/listebdr.component';
import { ListefactureComponent } from './listefacture/listefacture.component';
import { ListebdcComponent } from './listebdc/listebdc.component';
import { ListefactureFournisseurComponent } from './listefacture-fournisseur/listefacture-fournisseur.component';
import { AjouterbdcComponent } from './ajouterbdc/ajouterbdc.component';
import { AjouterbdlComponent } from './ajouterbdl/ajouterbdl.component';
import { AjouterbdsComponent } from './ajouterbds/ajouterbds.component';
import { AjouterbdrComponent } from './ajouterbdr/ajouterbdr.component';
import { AjouterdevisComponent } from './ajouterdevis/ajouterdevis.component';
import { AjouterfactureComponent } from './ajouterfacture/ajouterfacture.component';
import { AjouterfactureFournisseurComponent } from './ajouterfacture-fournisseur/ajouterfacture-fournisseur.component';
import { InscriptionComponent } from './inscription/inscription.component';

import { ModifiermouvementComponent } from './modifiermouvement/modifiermouvement.component';
import { AfficherbdcComponent } from './afficherbdc/afficherbdc.component';
import { ModifierbdcComponent } from './modifierbdc/modifierbdc.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



const routes: Routes = [{
path:'ajouterclient' ,component:AjouterclientComponent } ,{path:'',component:AcceuilComponent}, {
  path:'listeclients' ,component:ListclientComponent },{path:'modifierclient/:id' ,component:ModifierclientComponent  },
  {path:'ajouterfournisseur' ,component:AjouterfournisseurComponent  } ,{path:'listefournisseurs' ,component:ListefournisseurComponent }
,{ path:'modifierarticle',component:ModifierarticleComponent},{ path:'mouvements',component:AjoutermouvementComponent},
{ path:'ajouterarticle',component:AjouterarticleComponent},
{path:'listearticles' ,component:ListearticlesComponent }, {path:'listebdl' ,component:ListebdlComponent },
{path:'listebds' ,component:ListebdsComponent },{path:'listedevis' ,component:ListedevisComponent }
,{path:'listebdr' ,component:ListebdrComponent },{path:'listefactures' ,component:ListefactureComponent },
{path:'listebdc' ,component:ListebdcComponent },{path:'listefacturesfournisseur' ,component:ListefactureFournisseurComponent },
{path:'ajouterbdc' ,component:AjouterbdcComponent },{path:'ajouterbdl' ,component:AjouterbdlComponent},{path:'ajouterbds' ,component:AjouterbdsComponent},
{path:'ajouterbdr' ,component:AjouterbdrComponent},{path:'ajouterdevis' ,component:AjouterdevisComponent},{path:'ajouterfacture' ,component:AjouterfactureComponent},{path:'ajouterfacturefournisseur' ,component:AjouterfactureFournisseurComponent},
{path:'inscription',component:InscriptionComponent},{path:'modifierfacture/:id',component:ModifiermouvementComponent},
{path:'modifiermouvement/:id',component:ModifiermouvementComponent},{path:'modifierbdc/:id',component:ModifierbdcComponent},{path:'afficherbdc/:id',component:AfficherbdcComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
