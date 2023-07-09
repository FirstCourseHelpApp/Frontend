import { Component } from '@angular/core';


class Character {
  name: string = '';
  job: string = '';
  photo: string = '';
}


@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  public characters: Character[] = [
    {
      name: 'Обабков Илья Николаевич',
      job: 'Директор ИРИТ-РТФ и заведующий кафедрой Интеллектуальных информационных технологий',
      photo: 'assets/img/photo0.png'
    },
    {
      name: 'Белоусова Вероника Игоревна',
      job: 'Многими любимый преподаватель высшей математкики, кандидат физико-математических наук',
      photo: 'assets/img/photo1.png'
    },
    {
      name: 'Обабков Илья Николаевич',
      job: 'Директор ИРИТ-РТФ и заведующий кафедрой Интеллектуальных информационных технологий',
      photo: 'assets/img/photo0.png'
    },
    {
      name: 'Белоусова Вероника Игоревна',
      job: 'Многими любимый преподаватель высшей математкики, кандидат физико-математических наук',
      photo: 'assets/img/photo1.png'
    },
    {
      name: 'Обабков Илья Николаевич',
      job: 'Директор ИРИТ-РТФ и заведующий кафедрой Интеллектуальных информационных технологий',
      photo: 'assets/img/photo0.png'
    },
  ];
}
