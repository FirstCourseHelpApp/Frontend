import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  public progressPercent: number = 100;
  public chapters: {id: number, isCompleted: boolean}[] = [
    {
      id: 0,
      isCompleted: true
    },
    {
      id: 1,
      isCompleted: true
    },
    {
      id: 2,
      isCompleted: false
    },
    {
      id: 3,
      isCompleted: true
    },
    {
      id: 4,
      isCompleted: false
    },
  ];
}
