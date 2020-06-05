import { Component, OnInit, ɵConsole } from '@angular/core';
import { format } from 'url';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/Models/environements';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';

import { Questionnaire } from 'src/app/choix-questionnaire/Questionnaire';
//import { QuestionnaireService } from 'src/app/services/questionnaire.service';
//import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-choix-questionnaire',
  templateUrl: './choix-questionnaire.page.html',
  styleUrls: ['./choix-questionnaire.page.scss'],
})
export class ChoixQuestionnairePage implements OnInit {
  events: any;
  token: string;
  data1: string;
  public anArray:any=[];
  public TableQuestion:any=[];

  Questionnaires: Questionnaire[];
  constructor(private http :HttpClient,
    private authService: AuthService,
    private router: Router)
     {
      this.Afficher_Questionnaires()
     }
    questionnaires: Questionnaire[];

  //  public anArray:any=[];

  ngOnInit() 
  {
   
  }

  // Afficher tous les questionnaire dans une liste cliquable 
  Afficher_Questionnaires() :void
  {
    this.authService.AfficherQues()
    .subscribe((data:any[]) => 
    {
      console.log(data);
      this.anArray=data;
      console.log(data['_id']);
    }
   
    ,(err)=>
    {
      //this.events.publish('app:toast', "Error while trying to load data");
      console.log(err);
    }
    
    )
}


// Afficher_Question_From_Questionnaire() 
// {
//   this.router.navigate(['questionnaire-premier']);
//   let link = environment.url+ '/questionnaire/5eb91b94a698ee2d54a2e147';
//   this.http.get(link)
//   .subscribe((data:any[]) => 
//   {
//     console.log(data);
//     this.TableQuestion=data;
//   }
 
//   ,(err)=>
//   {
//     //this.events.publish('app:toast', "Error while trying to load data");
//     console.log(err);
//   }
  
//   )
//   return this.TableQuestion;
// }


OnSearch(event):void
{
let value: string = event.target.value;
if(value)
{
  this.questionnaires=this.questionnaires.filter((quest)=>{
    return quest.titre.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  })
}
}
}


  
