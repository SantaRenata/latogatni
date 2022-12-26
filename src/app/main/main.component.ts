/*
File: main.component.ts
Author: Sánta Renáta Diána
Copyright: 2022, Sánta Renáta Diána
Group: Szoft II N
Date: 2022-12-26
Github: https://github.com/SantaRenata/
Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { Settlement } from '../settlement';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  settlement : Settlement[] = [
    {name:"Székesfehérvár", country:"Fejér", area:170.89, population:95545},
    {name:"Szombathely", country:"Vas", area:97.5, population:78324},
    {name:"Sopron", country:"Győr-Moson-Sopron", area:169.04, population:62900},
    {name:"Zalaegerszeg", country:"Zala", area:102.42, population:55470},
    {name:"Sárvár", country:"Vas", area:64.65, population:15072},
    {name:"Lenti", country:"Zala", area:73.79, population:7348},
    {name:"Zalakaros", country:"Zala", area:17.17, population:1936},
  ];

  ngOnInit():void{
  }

}
