import { Component } from '@angular/core';
import { Player } from './player';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  players:Player[] = [{id:1,name:"Player1"},{id:2,name:"Player2"}];
  statusString:String = "";
  constructor(
    private boardSer : BoardService
  ){}


  diceValue:number = -1;

  playerRollDice(id:number,name:String):void{
    this.diceValue = Math.floor(Math.random() * 6) + 1;
    this.boardSer.passData({id:id,name:name,dice:this.diceValue});
    this.statusString = "Player" + id + " got " + this.diceValue;

    var disbutton = document.getElementById(id.toString()) as HTMLInputElement;
    disbutton.disabled = true;

    var finalId = id%this.players.length+1;
    var enButton = document.getElementById(finalId.toString()) as HTMLInputElement;
    enButton.disabled = false;
  }

}
