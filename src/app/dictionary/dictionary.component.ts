import { Component } from '@angular/core';


class Term {
  word: string = '';
  explanation: string = '';
}

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {
  public terms: Term[] = [
    {
      word: 'Пекус',
      explanation: 'Студент первого курса. Также встречается синоним: первак.'
    },
    {
      word: 'Втокус',
      explanation: 'Студент второго курса.'
    },
    {
      word: 'Трекус',
      explanation: 'Студент третьего курса.'
    },
    {
      word: 'Фокус',
      explanation: 'Студент четвёртого курса.'
    },
    {
      word: 'Большак',
      explanation: 'Перерыв между 3й и 4й парами. Является самым длинным из всех перерывов. ' +
        'Многие студенты предпочитают именно во время него пойти поесть.'
    },
  ];
}
