export class Ladder{

    constructor(){};

    ladderHeads:number[] = [1,4,9,28,21,51];
    ladderTails:number[] = [38,14,31,84,42,67];

    checkIfLadderHead(num:number):any{
        return this.ladderHeads.indexOf(num);
    }

    getLadderTail(idx:number):any{
        return this.ladderTails[idx];
    }

}