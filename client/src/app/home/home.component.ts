import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TaskData, TaskService } from '../services/task/task.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  showFiller = false;

  tasks: TaskData[];

  constructor(public taskService: TaskService) {
    taskService.get().subscribe((data: TaskData[]) => {
      this.tasks = data;
    })
  };

  ngOnInit(): void {
  }

  getTask($event: TaskData) {
    this.taskService.add($event).subscribe(
      (data: any) => {
        this.tasks.push(data)
      }
    );
  }

  removeTask($event) {
    const id = this.tasks[$event].ID
    this.taskService.remove(id).subscribe(x => {
      this.tasks.splice($event, 1);

    })
  }
}
