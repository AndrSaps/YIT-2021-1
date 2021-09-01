import { Component, OnInit } from '@angular/core';
import { CategoryService,Categories } from '../../services/category/category.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  visible = true;
  removable = true;
  public Categories_list: Categories[];
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private categoryService: CategoryService,private _snackBar: MatSnackBar) {
    categoryService.get().subscribe((data:Categories[])=>
    this.Categories_list=data
    )
   }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }



  remove(category: any): void {
    const index = this.Categories_list.indexOf(category);
    if (index >= 0) {
      this.categoryService.remove(category.ID).subscribe(x=>
        this.Categories_list.splice(index, 1),
        (error:any)=>this.openSnackBar("Oops! You can't delete category which is used in the tasks!","Close")
        );
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    const temp_category:Categories={
      Name: value.trim(),
      Color:"#"+Math.floor(Math.random()*16777215).toString(16),
      ID:0
    }
    if ((value || '').trim()) {
      this.categoryService.add(temp_category).subscribe((data:Categories)=>
      this.Categories_list.push(data));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }



  }


}
