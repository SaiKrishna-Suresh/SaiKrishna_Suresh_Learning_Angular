import { Injectable } from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {provideLocationMocks} from "@angular/common/testing";
import {MOCK_CONTENT} from "../Data/mock-content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {
 private playersList: Players[]=MOCK_CONTENT;
  getAllPlayers(): Observable<Players[]> {
    return  of(this.playersList);
  }


  constructor() { }
}
