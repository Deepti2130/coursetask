import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icourse } from '@app/model/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
courseData! :Icourse
courseForm! : FormGroup
  constructor(
    private form :FormBuilder,
   @Inject(MAT_DIALOG_DATA) private courseobj  :Icourse
  ) {
    this.createcourseForm()
    this.courseData = courseobj
    this.courseForm.patchValue(courseobj)
   }

  ngOnInit(): void {
    
  }

  createcourseForm(){
  this.courseForm = this.form.group({
    description :[null, Validators.required],
      category:[null, Validators.required],
      longDescription:[null, Validators.required],
      releasedAt:[null, Validators.required],
  })
  }

}
