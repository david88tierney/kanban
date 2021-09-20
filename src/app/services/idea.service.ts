import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  board: Board = new Board('Idea Board', [
    new Column('Ideas', [
    
    ]),
    new Column('Research', [
      
    ]),
    new Column('Todo', [
      
    ]),
    new Column('Done', [
      
    ])
  ]);

  constructor() { }


  getColumns(){
    return this.board.columns;
  }
  saveIdea(idea){
    this.board.columns[0].tasks.push(idea);
    console.log(this.board.columns[0].tasks)
  }

  getIdeas(){
    return this.board;
  }
}
