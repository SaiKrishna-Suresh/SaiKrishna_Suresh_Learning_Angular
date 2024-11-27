import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PlayersListComponent} from "./app/players-list/players-list.component";
import {PlayersListItemComponent} from "./app/players-list-item/players-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";


const routes: Routes=[
  {path:'',redirectTo:'/players',pathMatch:"full"},
  {path:'',component:PlayersListComponent},
  {path: 'players',component: PlayersListComponent},
  {path:'players/:id',
    loadComponent:()=>
  import('./app/players-list-item/players-list-item.component').then(m=>m.PlayersListItemComponent)},
  {path: 'modify',
    loadComponent:()=>import('./app/modify-list-item/modify-list-item.component').then(m=>m.ModifyListItemComponent)},
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
  }
];
bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes)]

}).then(()=>console.log('Bootstrap Successful'));
