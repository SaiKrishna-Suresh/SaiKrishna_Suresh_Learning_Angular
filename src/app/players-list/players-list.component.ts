import {Component, OnInit} from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {PlayersListItemComponent} from "../players-list-item/players-list-item.component";
import {NgIf, NgForOf, NgClass, NgOptimizedImage, DatePipe, UpperCasePipe, CurrencyPipe} from '@angular/common';
import {CricketPlayerService} from "../Services/cricket-player.service";
import {Router} from "@angular/router";
import {FullNamePipe} from "../full-name.pipe";
import {HoverHighlightDirective} from "../hover-highlight.directive";
@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    PlayersListItemComponent, NgIf, NgForOf, NgClass, NgOptimizedImage, FullNamePipe, DatePipe, UpperCasePipe, CurrencyPipe, HoverHighlightDirective
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent implements OnInit {
  players: Players[] = [];
  selectedPlayer?:Players;

  constructor(private cricketPlayerService: CricketPlayerService,private router:Router) {}
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
    editPlayer(player:Players):void{
    this.router.navigate(['/modify'],{queryParams:{rank:player.rank}});
    }
}
