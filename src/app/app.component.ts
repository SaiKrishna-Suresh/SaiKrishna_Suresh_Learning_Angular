import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet, Routes} from '@angular/router';
import {Players} from "./Shared/Models/Players";
import { NgForOf } from '@angular/common';
import {PlayersListComponent} from "./players-list/players-list.component";
import {CricketPlayerService} from "./Services/cricket-player.service";
import {PlayersListItemComponent} from "./players-list-item/players-list-item.component";
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component'

const routes: Routes = [
  { path: 'players-list', component: PlayersListComponent },
  { path: 'modify-list-item/:id', component: ModifyListItemComponent },
  { path: '', redirectTo: 'players-list', pathMatch: 'full' } // Default route
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, PlayersListComponent, PlayersListItemComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})

export class AppComponent implements OnInit{
  player1?:Players;
  constructor(private cricketPlayerService: CricketPlayerService) {}
  ngOnInit():void{
    this.getPlayerById(1);
  }
  getPlayerById(id:number): void{
    this.cricketPlayerService.getPlayerById(id).subscribe((player)=>{
      this.player1 = player;
});
}
}
