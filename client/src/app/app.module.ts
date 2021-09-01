import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { TaskService } from './services/task/task.service';
import { CategoryService } from './services/category/category.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import { CategoryListComponent } from './home/category-list/category-list.component';
import { MenuTabsComponent } from './home/menu-tabs/menu-tabs.component';
import { PendingTabsComponent } from './home/menu-tabs/pending-tabs/pending-tabs.component';
import { AddTaskFormComponent, TaskDialog } from './home/add-task-form/add-task-form.component';
import { MatNativeDateModule } from '@angular/material/core';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryListComponent,
    MenuTabsComponent,
    PendingTabsComponent,
    AddTaskFormComponent,
    TaskDialog
  ],
  imports: [
    FormsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    MatTabsModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDatepickerModule
  ],
  providers: [
    CategoryService,
    TaskService,
    MatDatepickerModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
