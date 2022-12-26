/*
File: about.component.ts
Author: Sánta Renáta Diána
Copyright: 2022, Sánta Renáta Diána
Group: Szoft II N
Date: 2022-12-26
Github: https://github.com/SantaRenata/
Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  owner!:string;
  date!:string;
  class!:string;
  github!:string;

  ngOnInit(): void {
    this.owner = "Sánta Renáta Diána";
    this.date = "2022-12-26";
    this.class = "Szoft II N"
    this.github = "https://github.com/SantaRenata";
  }

}
