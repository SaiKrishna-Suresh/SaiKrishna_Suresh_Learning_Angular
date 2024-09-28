import {Component,  Input} from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {NgIf, NgForOf, NgClass} from '@angular/common';

@Component({
  selector: 'app-players-list-item',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass],
  templateUrl: './players-list-item.component.html',
  styleUrl: './players-list-item.component.css'
})
export class PlayersListItemComponent {
@Input() player!:Players;
@Input() even!: boolean;
}
