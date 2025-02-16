import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Icourse, Ilesson } from '@app/model/course';
import { CoursesService } from '@app/services/courses.service';
import { debounceTime, distinctUntilChanged, Observable, startWith, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
 courseobj! :Icourse
 courseobj$ !:Observable<Icourse>
 courseId! :string
 courseLesson$!:Observable<Array<Ilesson>>
 lessonForm !:FormGroup;
  constructor(
    private _courseservice:CoursesService,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.lessonForm = new FormGroup({
      lessonName:new FormControl(null)
    })
    this.courseId = this._routes.snapshot.params['id'];
    console.log(this.courseId)
    if(this.courseId){
    this.courseobj$ = this._courseservice.getCourse(this.courseId)
     
    this.courseLesson$ = this._courseservice.getCourseLessions(this.courseId)
    
     }

     this.courseLesson$ = this.lessonForm.get('lessonName')
      ?.valueChanges
      .pipe(
        startWith(''),
        tap(val=>console.log(val)),
        //debounceTime(700),
        //distinctUntilChanged(),
        switchMap(res=>{
          return this._courseservice.getCourseLessions(this.courseId, 10, res)
        })
      )!

        // .subscribe(res=>{
        //   console.log(`APi call for :`, res);
        //   this.courseLesson$ = this._courseservice.getCourseLessions(this.courseId, 10, res)
            
        //     })
        }
  }

      


      //delay in emission observable(timeinmilisec)
      //prevent duplicate values
      //change detection =>async operation,input,event

    
  


