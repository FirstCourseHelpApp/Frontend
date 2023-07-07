import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

class TestQuestion {
  question: string;
  correctAnswer: string;
  options: string[];

  constructor(question: string, options: string[], correctAnswer: string) {
    this.correctAnswer = correctAnswer;
    this.question = question;
    this.options = options;
  }
}

@Component({
  selector: 'course-test',
  templateUrl: './course-test.component.html',
  styleUrls: ['./course-test.component.css']
})
export class CourseTestComponent {
  public test: TestQuestion[] = [
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
    },
  ]

  public isPassed: boolean = false;
  public isCorrect: boolean[] = [];

  public testForm: FormGroup = new FormGroup(
    {
      question0: new FormControl(this.test[0].options[0]),
      question1: new FormControl(this.test[1].options[0]),
      question2: new FormControl(this.test[2].options[0]),
      question3: new FormControl(this.test[3].options[0]),
      question4: new FormControl(this.test[4].options[0])
    },
  );

  public sendAnswers(): void {
    this.isPassed = true;
    this.isCorrect = [];
    for (let i: number = 0; i < this.test.length; i++) {
      let answer = this.testForm.get('question' + i.toString())?.value;
      this.isCorrect.push(answer === this.test[i].correctAnswer);
    }
  }
}
