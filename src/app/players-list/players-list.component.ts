import { Component } from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {PlayersListItemComponent} from "../players-list-item/players-list-item.component";
import { NgIf, NgForOf } from '@angular/common';
@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    PlayersListItemComponent,NgIf, NgForOf,
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent {
  players:Players[]=[{rank:1,firstName:"Virat",lastName:"kohli",country:"India",average:55},
    {rank:2,firstName:"Steve",lastName:"Smith",country:"Australia",average:49},
    {rank:3,firstName:"Rohit",lastName:"Sharma",country:"India",average:45},
    {rank:4,firstName:"Joe Benjamin",lastName:"Root",country:"England",average:44.3},
    {rank:5,firstName:"Kane",lastName:"Williamson",country:"New Zealand",average:42.2}];

}
