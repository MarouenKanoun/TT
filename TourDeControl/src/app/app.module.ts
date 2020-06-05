import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import  { HttpClientModule} from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
//import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { IonicStorageModule } from '@ionic/storage'

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ChoixQuestionnairePage } from './choix-questionnaire/choix-questionnaire.page';
//import { ReactiveFormsModule } from '@angular/forms';
//import { ChoixQuestionnairePage } from './choix-questionnaire/choix-questionnaire.page';
//import { TokenInterceptor } from 'app/src/TokenInterceptor;

// export function jwtOptionsFactory(storage) {
//   return {
//     tokenGetter: () => {
//       TokenInterceptor
//       return storage.get('access_token');
//     },
//     whitelistedDomains: ['localhost']
//   }
// }

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost']
  }
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ FormsModule,ReactiveFormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  HttpClientModule,
 
  IonicStorageModule ,
  IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
