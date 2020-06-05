import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
// import { Storage } from '@ionic/storage';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'choix-destination',
    loadChildren: () => import('./choix-destination/choix-destination.module').then( m => m.ChoixDestinationPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'questionnaire-premier/:idURL',
    loadChildren: () => import('./questionnaire-premier/questionnaire-premier.module').then( m => m.QuestionnairePremierPageModule)
  },
  {
    path: 'questionnaire-second',
    loadChildren: () => import('./questionnaire-second/questionnaire-second.module').then( m => m.QuestionnaireSecondPageModule)
  },
  {
    path: 'mon-profile',
    loadChildren: () => import('./mon-profile/mon-profile.module').then( m => m.MonProfilePageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'creer-un-compte',
    loadChildren: () => import('./creer-un-compte/creer-un-compte.module').then( m => m.CreerUnComptePageModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'choix-questionnaire',
    loadChildren: () => import('./choix-questionnaire/choix-questionnaire.module').then( m => m.ChoixQuestionnairePageModule),
    canActivate: [AuthGuardService]
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
