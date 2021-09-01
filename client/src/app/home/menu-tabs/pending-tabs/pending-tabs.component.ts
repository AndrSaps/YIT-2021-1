import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService,TaskData } from '../../../services/task/task.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'pending-tabs',
  templateUrl: './pending-tabs.component.html',
  styleUrls: ['./pending-tabs.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class PendingTabsComponent{
  
  @Input()
  tasks:any[]=[];

  @Output()
  delTask= new EventEmitter<any>()

  constructor(public taskService:TaskService) {
   }

   removeTask(task:any):void{
    const index=this.tasks.indexOf(task);
     if (index >= 0) {
      this.delTask.emit(index)
     }
   }

   getPendingCount(){
    return this.tasks.filter(x=>x.Status==false).length
   }

   getCompletedCount(){
    return this.tasks.filter(x=>x.Status==true).length
   }

   changeStatus(task:TaskData):void{
    const index=this.tasks.indexOf(task);
    const TaskToUpdate:TaskData={
      ID:this.tasks[index].ID,
      Text:this.tasks[index].Text,
      Status:!this.tasks[index].Status,
      Deadline:this.tasks[index].Deadline,
      CategoryID:this.tasks[index].CategoryID,
    }
    this.taskService.update(TaskToUpdate).subscribe(
     x=>x
    )
   }

}
