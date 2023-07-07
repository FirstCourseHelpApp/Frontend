import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

class TestQuestion {
  question: string;
  options: {name: string, isTrue: boolean}[];

  constructor(question: string, options: {name: string, isTrue: boolean}[]) {
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
        {
          name: 'Обабков Иван Николаевич',
          isTrue: false
        },
        {
          name: 'Обабков Илья Иванович',
          isTrue: false
        },
        {
          name: 'Обабков Илья Николаевич',
          isTrue: true
        }
      ]
    },
    {
      question: 'Кто лучший фронтендер?',
      options: [
        {
          name: 'Катя',
          isTrue: false
        },
        {
          name: 'Галя',
          isTrue: false
        },
        {
          name: 'Настя',
          isTrue: true
        }
      ]
    },
    {
      question: 'Кто лучший бэкендер?',
      options: [
        {
          name: 'Вася',
          isTrue: false
        },
        {
          name: 'Жора',
          isTrue: true
        },
        {
          name: 'Петя',
          isTrue: false
        }
      ]
    },
    {
      question: 'Как зовут собаку лучшего фронтендера?',
      options: [
        {
          name: 'Рик',
          isTrue: true
        },
        {
          name: 'Шарик',
          isTrue: false
        },
        {
          name: 'Бобик',
          isTrue: false
        }
      ]
    },
    {
      question: 'Кто лучшая команда?',
      options: [
        {
          name: 'Настя и Никита',
          isTrue: true
        },
        {
          name: 'Никита и Петя',
          isTrue: false
        },
        {
          name: 'Петя и Настя',
          isTrue: false
        }
      ]
    },
  ]

  public testForm: FormGroup = new FormGroup(
    {
      question0: new FormControl(this.test[0].options[0].name),
      question1: new FormControl(this.test[1].options[0].name),
      question2: new FormControl(this.test[2].options[0].name),
      question3: new FormControl(this.test[3].options[0].name),
      question4: new FormControl(this.test[4].options[0].name)
    },
  );

  public sendAnswers(): void {
    console.log(this.testForm);
  }
}
