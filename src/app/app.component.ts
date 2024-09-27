import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Players} from "./Shared/Models/Players";
import { NgForOf } from '@angular/common';
import {PlayersListComponent} from "./players-list/players-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, PlayersListComponent],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})

export class AppComponent {
  title = 'Assignment2';
  player1:Players []=[{rank:1,firstName:"Virat",lastName:"kohli",country:"India",average:55},
    {rank:2,firstName:"Steve",lastName:"Smith",country:"Australia",average:49},
    {rank:3,firstName:"Rohit",lastName:"Sharma",country:"India",average:45},
    {rank:4,firstName:"Joe Benjamin",lastName:"Root",country:"England",average:44.3},
    {rank:5,firstName:"Kane",lastName:"Williamson",country:"New Zealand",average:42.2}];

}
