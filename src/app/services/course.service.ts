import {Injectable} from '@angular/core';
import {TestQuestion} from "../models/test.model";
import {Chapter} from "../models/chapter.model";


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public course: Chapter[] = [
    {
      id: '0',
      name: '1-е сентября - знакомство',
      successRate: 0,
      subChapters: [
        {
          id: '0a',
          name: 'Кто был на линейке?',
          isCompleted: false
        },
        {
          id: '0b',
          name: 'Первая встреча с группой',
          isCompleted: false
        },
        {
          id: '0c',
          name: 'Добавление в беседы',
          isCompleted: false
        }
      ],
      test: {
        successRate: 0,
        testQuestions: [
          {
            question: 'Как зовут директора ИРИТ-РТФ?',
            options: [
              'Обабков Иван Николаевич',
              'Обабков Илья Иванович',
              'Обабков Илья Николаевич'
            ],
            correctAnswer: 'Обабков Илья Николаевич'
          },
          {
            question: 'Кто лучший фронтендер?',
            options: [
              'Катя',
              'Петя',
              'Настя'
            ],
            correctAnswer: 'Настя'
          },
          {
            question: 'Кто лучший бэкендер?',
            options: [
              'Вася',
              'Никита',
              'Петя'
            ],
            correctAnswer: 'Никита'
          },
          {
            question: 'Как зовут собаку лучшего фронтендера?',
            options: [
              'Рик',
              'Шарик',
              'Бобик'
            ],
            correctAnswer: 'Рик'
          },
          {
            question: 'Кто лучшая команда?',
            options: [
              'Настя и Никита',
              'Никита и Петя',
              'Петя и Настя'
            ],
            correctAnswer: 'Настя и Никита'
          }
        ]
      }
    }
  ];
}
