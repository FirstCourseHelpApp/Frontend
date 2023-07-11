import { Component } from '@angular/core';
import { YaReadyEvent } from 'angular8-yandex-maps';

@Component({
  selector: 'food-map',
  templateUrl: './food-map.component.html',
  styleUrls: ['./food-map.component.css']
})
export class FoodMapComponent {
  public points: {coords: number[], properties: ymaps.IPlacemarkProperties}[] = [
    {
      coords: [56.84254206447026,60.64530862437186],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Шаурма-Ауфф</strong>',
          '<br/>',
          'Дешевая и вкусная шаурма и прочие вкусности в виде выпечки',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.84405608641395,60.65399166931147],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Столовая ГУК\'а</strong>',
          '<br/>',
          'Не зря же здесь всегда полно народу: вкусно и дешево',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.84155606786889,60.654337999999996],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Has Kebab</strong>',
          '<br/>',
          'Сюда часто забегают перекусить',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.83989636680168,60.65098611780828],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Bakerkebab</strong>',
          '<br/>',
          'Сюда часто забегают перекусить',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.842497067871264,60.643791499999985],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Вилка-Ложка</strong>',
          '<br/>',
          'Вкусная еда и большой выбор блюд по средней цене',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.841788449199086,60.637593682882255],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Pizza Mia</strong>',
          '<br/>',
          'Сеть ресторанов, в которой екатеринбуржцы едят с самого детства. Вкусная пица по средней цене. Советуем попробовать куриные ножки в панировке',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.83837827306169,60.63821523065366],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Вкусно и точка</strong>',
          '<br/>',
          'Скачиваем приложение и используем купоны, легко наесться за 300 рублей. Высокое качество еды.',
          '</address>',
        ].join(''),
      }
    },
    {
      coords: [56.84640126302482,60.653646963396945],
      properties: {
        balloonContentBody: [
          '<address>',
          '<strong>Вкусно и сытно</strong>',
          '<br/>',
          'Ресторан у дендрапарка: едим и гуляем, наслаждаемся природой. Средняя цена.',
          '</address>',
        ].join(''),
      }
    }
  ];
}
