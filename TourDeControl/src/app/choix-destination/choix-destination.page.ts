import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastController, NavController } from '@ionic/angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/Models/environements';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import { jwtOptionsFactory } from '../app.module';
//import { HttpService } from '../services/http-service.service';



@Component({
    selector: 'app-choix-destination',
    templateUrl: './choix-destination.page.html',
    styleUrls: ['./choix-destination.page.scss'],
})
export class ChoixDestinationPage implements OnInit {
    events: any;
    form: FormGroup;
    Etablissement = ['Montpellier', 'Toulouse', 'Albi'];
    siteParEtab = {
        Montpellier: ['Montpellier-site 1', 'Montpellier-site 2', 'Montpellier-site 3'],
        Toulouse: ['Toulouse-site 1', 'Toulouse-site 2', 'Toulouse-site 3'],
        Albi: ['Albi-site 1', 'Albi site 2', 'Albi-site 3'],
    };
    sites = [];
    currentTime: Date;
    year: any;
    today: Date;
    anArray: any[];


    constructor(fb: FormBuilder, private _cdr: ChangeDetectorRef,private storage: Storage,private http: HttpClient,private formBuilder: FormBuilder, private authService: AuthService,private navCtrl:NavController) {

        this.currentTime = new Date();
        this.year = this.currentTime.getFullYear();


        this.form = fb.group({
            Etab: [''],
            site: [''],
            date: [null, Validators.compose([Validators.required])],
        });
    }

    onEtabChange(): void {
        let Etab = this.form.get('Etab').value;
        this.sites = this.siteParEtab[Etab];
        this._cdr.detectChanges();
      
    }

    ngOnInit() {
    }

    commencerVisite() {
        console.log(this.form.value)
        // console.log(this.form.get('Etab').value)
        // console.log(this.form.get('site').value)
        // console.log(this.form.get('date').value)
         localStorage.setItem('Etablissement', this.form.get('Etab').value);
         localStorage.setItem('Site', this.form.get('site').value);
        localStorage.setItem('Date', this.form.get('date').value);
       // console.log('my storage',localStorage.getItem('Etablissement'))test 
       
      // console.log('test from local storage',localStorage.getItem('Etablissement'))
        this.navCtrl.navigateForward('/choix-questionnaire');
     
    }
   

    }


