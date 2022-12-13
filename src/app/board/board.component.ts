import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Snake } from './snake';
import { Ladder } from './ladder';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    private boardService:BoardService
  ){}

  player1Position = 1;
  player2Position = 1;

  snake:Snake = new Snake();
  ladder:Ladder = new Ladder();

  ngOnInit(): void {
      this.boardService.dataObservable.subscribe((data)=>{
        if(data.id == 1){
          this.player1Position += data.dice;
          var snakeHead:number = this.snake.checkIfSnakeHead(this.player1Position);
          if(snakeHead!=-1){
            var snakeTail = this.snake.getSnakeTail(snakeHead);
            this.player1Position = snakeTail;
          }
          
          var laddedHead:number = this.ladder.checkIfLadderHead(this.player1Position);
          if(laddedHead != -1){
            var ladderTail = this.ladder.getLadderTail(laddedHead);
            this.player1Position = ladderTail;
          }

        }else if(data.id==2){
          this.player2Position += data.dice;
        }

        
        
      })
  }

  board:number[][] = this.boardService.board;
}
