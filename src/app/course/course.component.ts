import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  public chapters: { id: number, isCompleted: boolean }[] = [
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

  public progressPercent: number = this.chapters.reduce(
    (accumulator, currentValue) => {
      let value: number = currentValue.isCompleted ? 100/this.chapters.length : 0;
      return accumulator + value;
    },
    0
  );
}
