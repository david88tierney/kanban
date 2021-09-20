import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { IdeaService } from 'src/app/services/idea.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  idea = new FormControl('', [Validators.required, Validators.minLength(2)]);


  constructor(public ideaService: IdeaService) { }

  ngOnInit() {
    
  }

  getErrorMessage(){
    if(this.idea.hasError('required')){
      return 'You must enter a value!';
    }
  }

  saveIdea(idea){
    this.ideaService.saveIdea(idea.value);
  }

}
