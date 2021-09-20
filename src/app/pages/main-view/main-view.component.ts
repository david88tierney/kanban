import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  addTask: boolean = false;
  showBoard: boolean = true;

  constructor(public dialog: MatDialog, public ideaService: IdeaService) { }

  //  board: Board = new Board('Idea Board', [
  //   new Column('Ideas', [
  //     "Some random idea",
  //     "This is another random idea",
  //     "build an awesome application"
  //   ]),
  //   new Column('Research', [
  //     "Lorem ipsum",
  //     "foo",
  //     "This was in the 'Research' column"
  //   ]),
  //   new Column('Todo', [
  //     'Get to work',
  //     'Pick up groceries',
  //     'Go home',
  //     'Fall asleep'
  //   ]),
  //   new Column('Done', [
  //     'Get up',
  //     'Brush teeth',
  //     'Take a shower',
  //     'Check e-mail',
  //     'Walk dog'
  //   ])
  // ]);
  board: any;


  ngOnInit() {
    this.board = this.ideaService.getIdeas();
  }

    drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  openDialog(){
    let dialogRef = this.dialog.open(AddTaskComponent, {
      data : this.board
    });
    dialogRef.afterClosed().subscribe(data =>{
      console.log(data);
    })
  }
}
