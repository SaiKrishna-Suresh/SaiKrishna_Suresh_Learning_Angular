import { Component, OnInit } from '@angular/core';
import { Players } from "../Shared/Models/Players";
import { PlayersListItemComponent } from "../players-list-item/players-list-item.component";
import { NgIf, NgForOf, NgClass } from '@angular/common';
import { CricketPlayerService } from "../Services/cricket-player.service";
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    PlayersListItemComponent, NgIf, NgForOf, NgClass,
  ],
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css'] // Fixed to styleUrls
})
export class PlayersListComponent implements OnInit {
  players: Players[] = [];

  constructor(
    private cricketPlayerService: CricketPlayerService,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.loadAllPlayers();
  }

  loadAllPlayers(): void {
    this.cricketPlayerService.getAllPlayers().subscribe((data: Players[]) => {
      this.players = data;
    });
  }

  addPlayer(newPlayer: Players): void {
    this.cricketPlayerService.addPlayer(newPlayer).subscribe((updatedPlayers: Players[]) => {
      this.players = updatedPlayers;
    });
  }

  editPlayer(player: Players): void {
    this.router.navigate(['/modify-list-item', player.rank]); // Use the appropriate route
  }

  deletePlayer(id: number): void {
    this.cricketPlayerService.deletePlayer(id).subscribe(() => {
      this.loadAllPlayers(); // Refresh the list after deletion
    });
  }
}

