import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ChoixQuestionnairePage } from '../choix-questionnaire/choix-questionnaire.page';
import { environment } from 'src/Models/environements';
import { Router ,ActivatedRoute} from '@angular/router';
import { ChoixQuestionnairePage } from '../choix-questionnaire/choix-questionnaire.page';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
//import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
//import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import { ToastController, NavController } from '@ionic/angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { environment } from 'src/Models/environements';
//import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire-premier',
  templateUrl: './questionnaire-premier.page.html',
  styleUrls: ['./questionnaire-premier.page.scss'],
})
export class QuestionnairePremierPage implements OnInit {
  TableQuestion:any=[];
 idquestionnaire:any;
 form:FormGroup;
Reponse:any;
i=0;
Questions:any=[];
//NomEtab:any;


//positif
 ResultReponse={

  // etablissement: '',
  // site: '',
  // date :'',
  etablissement: localStorage.getItem('Etablissement'),
  site: localStorage.getItem('Site'),
  date : localStorage.getItem('Date'),
 positif:'',
 negatif:'',
 questions:[{
   contenu_question:'',
   reponse:'',
   commentaire:'',
 }]

}
// {
    //   etablissement: "etab", ok
    //   site: "site", ok
    //   date: "20/20/2020", ok
    //   positif: "++++",
    //   negatif: "------",
    //   questions: [
    //     {
    //     contenu_question: "bla bla bla",
    //     reponse: "oui",
    //     commentaire: "cette question est imbécile"
    //     },
    //     {
    //     contenu_question: "bla bla bla",
    //     reponse: "non",
    //     commentaire: "cette question est bonne"
    //     }
    //   ]
    // }

  constructor(private router: Router,private service :AuthService,private fb:FormBuilder,
    private active:ActivatedRoute) 
  { 
    this.form = fb.group({
      // miniscule
      positif: [''],
      negatif: [''],
      commentaire:[''],
      reponse:[''],

      contenu_question:['']

  });

  }

  ngOnInit() 
  {
this.active.params.subscribe(data=>{
  this.idquestionnaire=data.idURL
  console.log("id",this.idquestionnaire)
})

this.Afficher_Question_From_Questionnaire();
  }
  
Afficher_Question_From_Questionnaire()
{


return new Promise (resolve =>{
  
  //this.router.navigate(['questionnaire-premier']);
  this.service.AfficherQues_from_Questionnaireid(this.idquestionnaire).subscribe(res=>{
    for(let question of res.questions){
      console.log('questions'+JSON.stringify(res.questions))
      // this.Questions=res.questions;
      this.ResultReponse.questions.push(question);
    }
    // this.Questions=res..
   // this.TableQuestion.push(localStorage.getItem('Etablissement'));
     resolve(res)
  })
  
})
}


test()
{
 console.log("contenue"+this.ResultReponse.questions[1].contenu_question)
 this.Questions= {
   
contenu_question:this.ResultReponse.questions[1].contenu_question,
reponse:this.ResultReponse.questions[1].reponse,
commentaire:this.ResultReponse.questions[1].commentaire
 }
 let data =
  {
//     // positif <0 >0
//     // titre: this.credentialsForm.controls.titre.value.toString(),
//     // commentaire :this.credentialsForm.controls.commentaire.value.toString(),

//     // questions:this.questions // text de chaque question , reponse , commentaire 
    
 
 
    etablissement: localStorage.getItem('Etablissement'),
   site: localStorage.getItem('Site'),
   date : localStorage.getItem('Date'),
    positif:this.ResultReponse.positif,
    negatif:this.ResultReponse.negatif,

questions:this.Questions,
//   // reponse:'',
//   // commentaire:'',
  
// }
}
    
// });:
  
    
  


  
 // console.log('My data',data)
  //console.log('hello test' + this.form.value)
  //console.log(this.form.controls.Positive.value)
  //console.log(this.form.controls.Negative.value)
  //console.log(this.form.controls.Reponse.value)

  // console.log('test from local storage',localStorage.getItem('Etablissement'))
  // console.log('test from local storage',localStorage.getItem('Site'))
  // console.log('test from local storage',localStorage.getItem('Date'))

  console.log('ResultReponse ' , this.ResultReponse);
 // console.log('questionnai');
  //console.log('link',this.ResultReponse+'/',this.idquestionnaire)
  this.service.Send_Quiz(this.ResultReponse,this.idquestionnaire)

  .subscribe(res => {
  //   // this.presentAlert('Register Successfully', 'Please login with your new username and password');
    console.log(res);
   }, (err) => {
     console.log(err);
   });


}

}
