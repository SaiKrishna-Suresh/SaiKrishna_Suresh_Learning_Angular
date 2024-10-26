import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CricketPlayerService} from "../Services/cricket-player.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  playerForm: FormGroup;
  playerId?: number;

  constructor(
    private fb:FormBuilder,
    private cricketPlayerService: CricketPlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.playerForm=this.fb.group({
      rank:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      country:['',Validators.required],
      average:['']
    });

  }
  ngOnInit(): void {
    this.playerId= Number(this.route.snapshot.paramMap.get('id'));
    if(this.playerId){
      this.cricketPlayerService.getPlayerById(this.playerId).subscribe(player=>{
        if(player){
          this.playerForm.patchValue(player);
        }
      });
    }
  }
  onSubmit(): void{
    if(this.playerId){
      this.cricketPlayerService.updatePlayer({...this.playerForm.value, rank:this.playerId}).subscribe(()=>{
        this.router.navigate(['/players-list']);
      });
    }
  }

}
