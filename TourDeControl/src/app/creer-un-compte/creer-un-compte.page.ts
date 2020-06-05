import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/Models/environements';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

import {
  FormGroup, FormArray, FormBuilder,
  Validators, ReactiveFormsModule, NgForm
} from '@angular/forms';
import { error } from 'util';
import { Router } from '@angular/router';




@Component({
  selector: 'app-creer-un-compte',
  templateUrl: './creer-un-compte.page.html',
  styleUrls: ['./creer-un-compte.page.scss'],
})
export class CreerUnComptePage implements OnInit {
  
  credentialsForm: FormGroup;
  Userform: FormGroup;
  public items: any;

  data = '';
  public error: string;
  myerror = '';
  mysuccess = '';
  errorServer = '';
  header = '';
  dataFormService: any = "";

  constructor( private router: Router,
    
    public toastController: ToastController,public alertController: AlertController,private formBuilder: FormBuilder, private authService: AuthService, private navCtrl: NavController, private http: HttpClient) {
  }

  ngOnInit() {


    this.Userform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      poste: ['', Validators.required]
    });

  }
  // Methode créer compte 
  Creer_Compte() {

    console.log('debug creer compte debut');
    var dataToSend = this.Userform.value;
    this.authService.register(dataToSend).subscribe((dataReturnFromService) => {
      this.mysuccess = dataReturnFromService['Success'];
      console.log(dataReturnFromService);

      this.dataFormService = JSON.stringify(dataReturnFromService)
    }, error => {

      console.log(error);
      this.errorServer = error['status'];
      console.log('status ' + this.errorServer);
      this.myerror = error['error'];
      console.log('myerror' + this.myerror);
    


    })
  }

  onFormSubmit(form: NgForm) {
    console.log(this.Userform.value);
    this.authService.register(this.Userform.value)
   
      .subscribe(res => {
       // this.presentAlert('Register Successfully', 'Please login with your new username and password');
       console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

  NavForDestination()
  {
    console.log('NavForDestination');
    this.navCtrl.navigateForward('/choix-destination');
  }
  

}




