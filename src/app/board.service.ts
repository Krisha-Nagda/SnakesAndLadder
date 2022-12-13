import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  board:number[][];

  constructor() { 
    this.board = [];

    for(var i:number=0; i<10; i++){
      this.board[i] = [];
    }
    
    var boardNumber:number = 1;
    var rightTraversal:number = 1;
    for(var i:number=9; i>=0; i--){
      if(rightTraversal == 1){
        for(var j:number=0; j<10; j++){
          this.board[i][j] = boardNumber;
          boardNumber++;
        }
        rightTraversal = 0;
      }else{
        for(var j:number=9; j>=0; j--){
          this.board[i][j] = boardNumber;
          boardNumber++;
        }
        rightTraversal=1;
      }
      

    }
  }

  dataObservable = new Subject<any>();
  passData(data:any){
    this.dataObservable.next(data);
  }
}
