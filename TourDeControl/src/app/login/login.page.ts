
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
//import { FormGroup, FormArray, FormBuilder,
  //Validators,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //authenticationState = new BehaviorSubject(false);
 
  credentialsForm: FormGroup;
  dataFormService='';
  errorService='';
 
  constructor(private router: Router,private formBuilder: FormBuilder, private authService: AuthService,private navCtrl:NavController) { }
  
  //initialisation
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      // la saisie d'une adresse mail est obligatoire 
      email: ['', [Validators.required, Validators.email]],
       // le mot de passe est obligatoire et doit etre composé de minimum 8 caractere 
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
 
 // Methode de login 
  // onSubmit(){
  // this.authService.login(this.credentialsForm);
  // }

  onSubmit() {
    console.log(this.credentialsForm.value);
    this.authService.login(this.credentialsForm.value).subscribe(res=> {
      localStorage.setItem('token', res.token);
      this.router.navigate(['choix-destination']);

      console.log(res)
   
    },
    err =>{
      console.log(err['error']);

    }
    );
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        console.log('Test Loin response:', res)
    
       //this.authenticationState.next(true);
        if (res) {
          localStorage.setItem('token', res);
      
          
          this.router.navigate(['choix-destination']);
          //this.navCtrl.navigateForward('/Book');
        }
      }, (err) => {
        console.log(err);
      });
  }

 

  // register() {
  //   this.authService.register(this.credentialsForm.value).subscribe(res => {
  //     // Call Login to automatically login the new user
  //     this.authService.login(this.credentialsForm.value).subscribe();
  //   });
  // }
  NavCreerUnComte():void 
  {
    this.navCtrl.navigateForward('/creer-un-compte');

  }
  NavChoix():void 
  {
       console.log('go') ;
       this.navCtrl.navigateForward('/choix-destination');
       console.log('OK') ;
       

  }
 
}
