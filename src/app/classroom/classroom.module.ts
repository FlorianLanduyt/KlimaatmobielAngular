import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListClassroomsComponent } from './overzicht/horizontal-list-classrooms/horizontal-list-classrooms.component';
import { ClassroomListComponent } from './overzicht/classroom-list/classroom-list.component';
import { ClassroomComponent } from './overzicht/classroom/classroom.component';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ClassroomDetailComponent } from './classroomDetail/classroom-detail/classroom-detail.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { ClassroomFormComponent } from './addClassroom/classroom-form/classroom-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { AddPupilFormComponent } from './classroomDetail/add-pupil-form/add-pupil-form.component';
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [HorizontalListClassroomsComponent, ClassroomListComponent, ClassroomComponent, ClassroomDetailComponent, ClassroomFormComponent, AddPupilFormComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    ClassroomListComponent
  ],
  entryComponents: [AddPupilFormComponent]
})
export class ClassroomModule { }
