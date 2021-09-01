import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu-tabs',
  templateUrl: './menu-tabs.component.html',
  styleUrls: ['./menu-tabs.component.css']
})
export class MenuTabsComponent implements OnInit {

  @Output()
  delTask= new EventEmitter<any>();

  @Input()
  tasks:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask($event){
    this.delTask.emit($event);
  }


}
