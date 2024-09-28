import {Component, input, Input} from '@angular/core';
import {Players} from "../Shared/Models/Players";
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-players-list-item',
  standalone: true,
  imports: [NgIf,NgForOf],
  templateUrl: './players-list-item.component.html',
  styleUrl: './players-list-item.component.css'
})
export class PlayersListItemComponent {
@Input() player!:Players;
}
