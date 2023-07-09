import { Component } from '@angular/core';

@Component({
  selector: 'course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css']
})
export class CourseHomeComponent {
  public chapters: {name: string, subchapters: string[]}[] = [
    {
      name: '1-е сентября - знакомство',
      subchapters: [
        'Кто был на линейке?',
        'Первая встреча с группой',
        'Добавление в беседы'
      ]
    },
    {
      name: 'Выбор предметов в модеусе',
      subchapters: [
        'Как работает ИОТ?',
        'Знакомство с модеусом',
        'Составим оптимальное расписание',
        'Как найти информацию о предметах'
      ]
    },
    {
      name: 'Первая пара',
      subchapters: [
        'Как найти аудиторию?',
        'Знакомство с командами',
        'Как общаться с преподавателями?',
        'Успеть поесть на большаке'
      ]
    },
    {
      name: 'Процесс обучения',
      subchapters: [
        'Про онлайн курсы',
        'Тайм-менеджмент',
        'Как решать проблемы',
        'Самообучение',
        'БРС'
      ]
    },
    {
      name: 'Это страшное слово - “сессия”',
      subchapters: [
        'Про автоматы',
        'Как подготовиться',
        'Выбор дат экзаменов',
        'Как вести себя на экзамене'
      ]
    }
  ];
}
