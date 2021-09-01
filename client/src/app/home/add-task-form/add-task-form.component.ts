import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CategoryService,Categories } from '../../services/category/category.service';
import { TaskData,TaskService } from '../../services/task/task.service';


export interface TaskModel {
  text: string;
  category: number;
  date:Date;
}

@Component({
  selector: 'add-task-form',
  templateUrl:'./add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  text: string;
  category: number;
  date:Date;

  @Output()
  newTask = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private taskService:TaskService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialog, {
      width: '400px',
      data: {text: this.text, 
        category: this.category,
      date:this.date}
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.AddTask(result.text,result.category,result.date);
    });
  }

  AddTask(add_text:string,ID:number,date:Date):void{
    if ((add_text || '').trim()) {
      const temp_task:TaskData={
        ID:0,
        Text:add_text.trim(),
        Status:false
      }
      if(date){
        let number = date.getHours();
        date.setUTCHours(number+25,number,number,number);
        temp_task.Deadline=date
      }
      if(ID){
        temp_task.CategoryID=ID;
      }
      this.newTask.emit(temp_task)
    }
  }
}


@Component({
  selector: 'add-task-form-dialog',
  templateUrl: './add-task-form-dialog.component.html',
  styleUrls: ['./add-task-form.component.css']
})

export class TaskDialog {
  Categories_list:Categories[];
  constructor(
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<TaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel) {
      this.categoryService.get().subscribe((data:Categories[])=>
      this.Categories_list=data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
