import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {PlayersListComponent} from "./app/players-list/players-list.component";
import {PlayersListItemComponent} from "./app/players-list-item/players-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes=[
  {path:'',component:PlayersListComponent},
  {path: 'players',component: PlayersListComponent},
  {path:'players/:id',component:PlayersListItemComponent},
  {path: 'modify', component:ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent},
];
bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes)]

}).then(r=>console.log('Bootstrap Successful'));
