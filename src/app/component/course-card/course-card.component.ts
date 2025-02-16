import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Icourse } from '@app/model/course';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() courseObj ! :Icourse;
  constructor(
    private _MatDialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  onEdit(){
    //to send the data to patch in form
   let dialogConfig = new MatDialogConfig();
   dialogConfig.data=this.courseObj
   dialogConfig.disableClose = true
   dialogConfig.width = '500px'
   dialogConfig.autoFocus=false


  const dialogRef = this._MatDialog.open(CourseFormComponent,dialogConfig)

  //get updated data from dialogref

  }

}
