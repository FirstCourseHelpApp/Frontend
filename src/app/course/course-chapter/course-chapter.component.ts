import { Component } from '@angular/core';

@Component({
  selector: 'course-chapter',
  templateUrl: './course-chapter.component.html',
  styleUrls: ['./course-chapter.component.css']
})
export class CourseChapterComponent {
  public chapter: {name: string, subchapters: string[], chapterDescription: string} = {
    name: '1-е сентября - знакомство',
    subchapters: [
      'Кто был на линейке?',
      'Первая встреча с группой',
      'Добавление в беседы'
    ],
    chapterDescription: 'Познакомимся с директором, тьюторами и твоей новой семьёй - одногруппниками и кураторами.'
  };
}
