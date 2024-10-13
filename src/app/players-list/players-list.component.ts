import {Component, OnInit} from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {PlayersListItemComponent} from "../players-list-item/players-list-item.component";
import {NgIf, NgForOf, NgClass} from '@angular/common';
import {CricketPlayerService} from "../Services/cricket-player.service";
@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    PlayersListItemComponent, NgIf, NgForOf, NgClass,
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent implements OnInit {
  players: Players[] = [];
  selectedPlayer?:Players;

  constructor(private cricketPlayerService: CricketPlayerService) {}
    ngOnInit():void {
      this.loadAllPlayers();
    }
    loadAllPlayers():void{
    this.cricketPlayerService.getAllPlayers().subscribe((data:Players[])=>{
      this.players=data;
      });
    }
    addPlayer(newPlayer:Players):void{
    this.cricketPlayerService.addPlayer(newPlayer).subscribe((updatedPlayers: Players[])=>{
      this.players = updatedPlayers;
    });
    }
    updatePlayer(updatedPlayer:Players):void{
    this.cricketPlayerService.updatePlayer(updatedPlayer).subscribe((updatedPlayer: Players[])=>{
      this.players= updatedPlayer;
      });
    }
    deletePlayer(id: number):void{
    this.cricketPlayerService.deletePlayer(id).subscribe((removedPlayer)=>{
      if(removedPlayer){
        this.loadAllPlayers();
      }
    });
    }
    getPlayerById(id: number):void{
    this.cricketPlayerService.getPlayerById(id).subscribe((player)=>{
      if(player){
        this.selectedPlayer=player;
      }
    });
    }


}
