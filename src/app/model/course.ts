export interface Icourse {
    id: number
    description: string
    iconUrl: string
    courseListIcon?: string
    longDescription: string
    category: "ADVANCED"|"BEGINNER"
    lessonsCount?: number
    releasedAt:any
  }

  export interface Ilesson{
    id:number,
    description:string,
    duration:string,
    seqNo:number,
    courseId:number
  }