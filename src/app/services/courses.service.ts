
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icourse, Ilesson } from '@app/model/course';
import { map, Observable, shareReplay, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  BASE_URL: string = `${environment.baseUrl}`;
  COURSE_URL: string = `${environment.baseUrl}/courses`
  private coursecache$: Observable<Array<Icourse>> | null = null
  constructor(
    private _http: HttpClient
  ) { }

  fetchAllCourse(): Observable<Array<Icourse>> {
    // if(!this.coursecache$){
    return this._http.get(this.COURSE_URL)
      .pipe(
        map((data: any) => {
          return data.payload
        }),
        shareReplay(1)
      )
  }
  // return this.coursecache$

  getCourse(id: string): Observable<Icourse> {
    let SINGLE_COURSE_URL = `${this.COURSE_URL}/${id}`;
  
    
    return this._http.get<Icourse>(SINGLE_COURSE_URL)
  }


  getCourseLessions(courseId: string, pageSize: number = 15, fliter = ''): Observable<Array<Ilesson>> {
    // let LESSION_URL =`${this.BASE_URL}/lessons?courseId=${courseId}`;
    let LESSION_URL = `${this.BASE_URL}/lessons`;
    let params = new HttpParams()
      .set("courseId", courseId)
      .set("pageSize", pageSize)
      .set("fliter", fliter)
    return this._http.get(LESSION_URL, { params })
      .pipe(
        map((res: any) => res.payload)
      )
  }
}
