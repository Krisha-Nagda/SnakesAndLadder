export class Snake{

    constructor(){}

    snakeHeads:number[] = [17,54,62,64,87,93,95,98];
    snakeTails:number[] = [7,34,19,60,24,73,75,79];

    checkIfSnakeHead(num:number):any{
        return this.snakeHeads.indexOf(num);
    }

    getSnakeTail(idx:number):any{
        return this.snakeTails[idx];
    }

}