import {Component,  Input} from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {NgIf, NgForOf, NgClass, NgOptimizedImage, CurrencyPipe, DatePipe, UpperCasePipe} from '@angular/common';
import {FullNamePipe} from "../full-name.pipe";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-players-list-item',
  standalone: true,
  imports: [NgIf, NgClass, NgOptimizedImage, CurrencyPipe, DatePipe, FullNamePipe, UpperCasePipe,MatCardModule],
  templateUrl: './players-list-item.component.html',
  styleUrls:[ './players-list-item.component.css']
})
export class PlayersListItemComponent {
@Input() player?: Players;
@Input() even?: boolean;
}
