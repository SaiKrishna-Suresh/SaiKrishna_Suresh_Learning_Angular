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

  constructor(private cricketPlayerService: CricketPlayerService) {}
    ngOnInit():void {
    this.cricketPlayerService.getAllPlayers().subscribe((data:Players[])=>{
      this.players=data;
      });
    }

}
