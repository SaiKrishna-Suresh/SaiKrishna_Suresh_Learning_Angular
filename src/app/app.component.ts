import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Players} from "./Shared/Models/Players";
import { NgForOf } from '@angular/common';
import {PlayersListComponent} from "./players-list/players-list.component";
import {CricketPlayerService} from "./Services/cricket-player.service";
import {PlayersListItemComponent} from "./players-list-item/players-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, PlayersListComponent, PlayersListItemComponent],
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
