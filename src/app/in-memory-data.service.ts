import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes=[
      {id:11,firstName:'Babar Azam'},
      {id:12,firstName:'Sanju',lastName:' Samson',position:'Batter'},
      {id:13,firstName:'Aiden',lastName:' Makram',position: 'Batter'},
      {id:14,firstName:'Marnus',lastName:' Labuschagne',position: 'Batter'}
    ]
  }

  constructor() { }
}
