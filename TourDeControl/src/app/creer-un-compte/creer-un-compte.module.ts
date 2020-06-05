//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';

//import { IonicModule } from '@ionic/angular';

import { CreerUnComptePageRoutingModule } from './creer-un-compte-routing.module';
//import { Routes, RouterModule } from '@angular/router';
import { CreerUnComptePage } from './creer-un-compte.page';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
//import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerUnComptePageRoutingModule,
    ReactiveFormsModule,
 
  ],
  declarations: [CreerUnComptePage]
})
export class CreerUnComptePageModule {}
