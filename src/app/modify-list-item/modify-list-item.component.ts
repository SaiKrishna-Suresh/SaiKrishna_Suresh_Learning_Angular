import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {last} from "rxjs";
import {Players} from "../Shared/Models/Players";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  itemForm: FormGroup;
  isEditMode =false;
  selectedPlayer?:Players;

  constructor(private fb:FormBuilder,private playerService: CricketPlayerService, private router:Router) {
    this.itemForm = this.fb.group({
      rank:['',[Validators.required,Validators.min(1)]],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      country:['',Validators.required],
      average: [''],
    });
  }
  ngOnInit():void{
    this.selectedPlayer=history.state?.player;
    if(this.selectedPlayer){
      this.isEditMode=true;
      this.itemForm.patchValue(this.selectedPlayer);
    }
  }

  onSubmit():void{
    const formData = this.itemForm.value;
    if(this.isEditMode&&this.selectedPlayer){
      this.playerService.updatePlayer({...formData,rank:this.selectedPlayer.rank}).subscribe(()=>{
        this.router.navigate(['/']);
      });
    }else {
      this.playerService.addPlayer(formData).subscribe(()=>{
        this.router.navigate(['/']);
      });
    }
  }
  resetForm():void{
    this.itemForm.reset();
  }



}
