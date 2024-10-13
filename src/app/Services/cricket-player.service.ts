import { Injectable } from '@angular/core';
import {Players} from "../Shared/Models/Players";
import {provideLocationMocks} from "@angular/common/testing";
import {MOCK_CONTENT} from "../Data/mock-content";
import {observable, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CricketPlayerService {
  private playersList: Players[] = MOCK_CONTENT;

  getAllPlayers(): Observable<Players[]> {
    return of(this.playersList);
  }


  constructor() {
  }
  getPlayerById(id: number): Observable<Players | undefined> {
    const player = this.playersList.find(p => p.rank === id);
    return of(player);
  }
  addPlayer(newPlayer:Players):Observable<Players[]>{
    this.playersList.push(newPlayer);
    return of (this.playersList);
  }
  updatePlayer(updatedPlayer:Players):Observable<Players[]>{
    const index = this.playersList.findIndex(p=>p.rank==updatedPlayer.rank);
    if(index!==-1){
      this.playersList[index] = updatedPlayer;

    }
    return of(this.playersList);
  }
  deletePlayer(id:number):Observable<Players | undefined >{
    const index = this.playersList.findIndex(p=>p.rank===id);
    let removedPlayer;
    if(index!==1){
      removedPlayer = this.playersList.splice(index,1)[0];
    }
    return of(removedPlayer);
  }
}
