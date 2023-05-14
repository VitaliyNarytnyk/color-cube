import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ItemsData } from '@app/core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  //private api = 'https://mailthis.to/aybt'

  constructor(private http: HttpClient) { }

  //sendForm(data: any): Observable<any> {
  //  return this.http.post(`${this.api}`, data, { responseType: 'text' });
  //}

  getData(): Observable<ItemsData> {
    return of({
      data: {
        general: {
          items: [
            { id: 0, title: 'Плакати, Афіші', img: '../../../../assets/images/general/general01.jpg' },
            { id: 1, title: 'Меню', img: '../../../../assets/images/general/general02.jpg' },
            { id: 2, title: 'Блокноти', img: '../../../../assets/images/general/general03.jpg' },
            { id: 3, title: 'Календарі', img: '../../../../assets/images/general/general04.png' },
            { id: 4, title: 'Корпоративні записники', img: '../../../../assets/images/general/general05.jpg' },
            { id: 5, title: 'Візитки', img: '../../../../assets/images/general/general06.jpg' },
            { id: 6, title: 'Розробка дизайну', img: '../../../../assets/images/general/general07.jpg' },
            { id: 7, title: 'Пластикові карти', img: '../../../../assets/images/general/general08.jpg' },
            { id: 8, title: 'Брошури, Каталоги', img: '../../../../assets/images/general/general09.jpg' },
          ]
        },
        width: {
          items: [
            { id: 0, title: '', img: '../../../../assets/images/width/width01.jpeg' },
            { id: 1, title: '', img: '../../../../assets/images/width/width02.jpg' },
            { id: 2, title: '', img: '../../../../assets/images/width/width03.jpg' },
            { id: 3, title: '', img: '../../../../assets/images/width/width04.jpg' },
            { id: 4, title: '', img: '../../../../assets/images/width/width05.jpg' },
            { id: 5, title: '', img: '../../../../assets/images/width/width06.jpg' },
            { id: 6, title: '', img: '../../../../assets/images/width/width07.jpg' },
            { id: 7, title: '', img: '../../../../assets/images/width/width08.jpg' },
            { id: 9, title: '', img: '../../../../assets/images/width/width09.jpg' },
            { id: 10, title: '', img: '../../../../assets/images/width/width10.jpg' },
            { id: 11, title: '', img: '../../../../assets/images/width/width11.jpg' },
            { id: 12, title: '', img: '../../../../assets/images/width/width12.jpg' },
          ]
        },
        special: {
          items: [
            { id: 0, title: 'Чашки', img: '../../../../assets/images/special/special01.jpg' },
            { id: 1, title: 'Ручки', img: '../../../../assets/images/special/special02.jpg' },
            { id: 2, title: 'Флешки', img: '../../../../assets/images/special/special03.jpg' },
            { id: 3, title: 'Запальнички', img: '../../../../assets/images/special/special04.jpg' },
            { id: 4, title: `Павербанки`, img: '../../../../assets/images/special/special05.jpg' },
            { id: 5, title: 'Футболки', img: '../../../../assets/images/special/special06.png' },
            { id: 6, title: 'Повітряні кульки', img: '../../../../assets/images/special/special07.jpg' },
            { id: 7, title: 'Підвіски', img: '../../../../assets/images/special/special08.jpg' },
            { id: 8, title: 'Пластикові вироби', img: '../../../../assets/images/special/special09.jpg' }
          ]
        },
        silkscreen: {
          items: [
            { id: 0, title: '', img: '../../../../assets/images/silkscreen/silkscreen01.jpg' },
            { id: 1, title: '', img: '../../../../assets/images/silkscreen/silkscreen02.jpg' },
            { id: 2, title: '', img: '../../../../assets/images/silkscreen/silkscreen03.jpg' },
            { id: 3, title: '', img: '../../../../assets/images/silkscreen/silkscreen04.jpg' },
            { id: 4, title: '', img: '../../../../assets/images/silkscreen/silkscreen05.jpg' },
            { id: 5, title: '', img: '../../../../assets/images/silkscreen/silkscreen06.jpg' }
          ]
        },
        package: {
          items: [
            { id: 0, title: '', img: '../../../../assets/images/package/package01.jpg' },
            { id: 1, title: '', img: '../../../../assets/images/package/package02.jpg' },
            { id: 2, title: '', img: '../../../../assets/images/package/package03.jpg' },
            { id: 3, title: '', img: '../../../../assets/images/package/package04.jpg' },
            { id: 4, title: '', img: '../../../../assets/images/package/package05.jpg' },
            { id: 5, title: '', img: '../../../../assets/images/package/package06.jpg' }
          ]
        },
        advertising: {
          items: [
            { id: 0, title: '', img: '../../../../assets/images/advertising/advertising01.jpg' },
            { id: 1, title: '', img: '../../../../assets/images/advertising/advertising02.jpg' },
            { id: 2, title: '', img: '../../../../assets/images/advertising/advertising03.jpg' },
            { id: 3, title: '', img: '../../../../assets/images/advertising/advertising04.jpg' },
            { id: 4, title: '', img: '../../../../assets/images/advertising/advertising05.jpg' },
            { id: 5, title: '', img: '../../../../assets/images/advertising/advertising06.jpg' }
          ]
        },
        projects: {
          items: [
            { id: 0, img: "../../../assets/images/projects/projects01.jpg", title: "Меню для ресторану" },
            { id: 1, img: "../../../assets/images/projects/projects02.jpg", title: "Візитні карти" },
            { id: 2, img: "../../../assets/images/projects/projects03.jpg", title: "Корпоративні блокноти" },
            { id: 3, img: "../../../assets/images/projects/projects04.jpg", title: "Roll-up стенди" },
            { id: 4, img: "../../../assets/images/projects/projects05.jpg", title: "Паперові пакети" },
            { id: 5, img: "../../../assets/images/projects/projects06.jpg", title: "Товарні бірки" }
          ]
        }
      }
    });
  }
}
