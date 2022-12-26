/*
File: app-routing.module.ts
Author: Sánta Renáta Diána
Copyright: 2022, Sánta Renáta Diána
Group: Szoft II N
Date: 2022-12-26
Github: https://github.com/SantaRenata/
Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"main", component:MainComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
