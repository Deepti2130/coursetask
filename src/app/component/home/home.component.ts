import { Component, OnInit } from '@angular/core';
import { Icourse } from '@app/model/course';

import { CoursesService } from '@app/services/courses.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses !:Array<Icourse>;
  allCourses$!:Observable<Array<Icourse>>;
    beginerCourses$!:Observable<Array<Icourse>>;
    advanceCourses$!:Observable<Array<Icourse>>;
    beginerCourses !:Array<Icourse>;
    advanceCourses !:Array<Icourse>;
  constructor(
    private _courseservice:CoursesService
  ) { }

  ngOnInit(): void {
    this._courseservice.fetchAllCourse()
    .subscribe(res=>{
      console.log(res)
      this.courses = res
      this.beginerCourses = res.filter(c => c.category === "BEGINNER");
      this.advanceCourses = res.filter(c => c.category === "ADVANCED");
    })

//     this.allCourses$ = this._courseservice.fetchAllCourse()

//     this.advanceCourses$ = this._courseservice.fetchAllCourse()
//                            .pipe(
//                             map(data=>{
//                               return data.filter(course=>course.category === "ADVANCED" )
//                             })
//                            )

// this.beginerCourses$ = this._courseservice.fetchAllCourse()
//         .pipe(
//           map(data=>{
//             return data.filter(c=>c.category === "BEGINNER")
//           })
//         )   
//   }

}
}
