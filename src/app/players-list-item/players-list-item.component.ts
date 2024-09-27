import {Component, input, Input} from '@angular/core';
import {Players} from "../Shared/Models/Players";

@Component({
  selector: 'app-players-list-item',
  standalone: true,
  imports: [],
  templateUrl: './players-list-item.component.html',
  styleUrl: './players-list-item.component.css'
})
export class PlayersListItemComponent {
@Input() player?:Players;
}
