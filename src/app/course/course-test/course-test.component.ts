import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

class TestQuestion {
  question: string = '';
  correctAnswer: string = '';
  options: string[] = [];
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
      question: 'Какая буква относится к аудиториям в ИРИТ-РТФ?',
      options: [
        'Р',
        'И',
        'Ф'
      ],
      correctAnswer: 'И'
    },
    {
      question: 'Какой язык изучается в первую очередь на 09 направлении?',
      options: [
        'C#',
        'C++',
        'Python'
      ],
      correctAnswer: 'C#'
    },
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
      question: 'Как зовут директора ИРИТ-РТФ?',
      options: [
        'Обабков Иван Николаевич',
        'Обабков Илья Иванович',
        'Обабков Илья Николаевич'
      ],
      correctAnswer: 'Обабков Илья Николаевич'
    }
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
