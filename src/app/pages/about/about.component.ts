import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  array1: { id: number; title: string; img: string }[] = [
    { id: 0, title: 'Узгодження замовлення та <br/> вимог до друкованої продукції', img: '../../../assets/images/about/about02.jpg', },
    { id: 1, title: 'Складання та погодження кошторису та технічного завдання', img: '../../../assets/images/about/about03.jpg', },
  ]

  array2: { id: number; title: string; img: string }[] = [
    { id: 0, title: 'Консультації щодо вибору матеріалів та дизайну', img: '../../../assets/images/about/about04.jpg', },
    { id: 1, title: 'Виконання повного спектру робіт з друкованої продукції від макету до готової продукції', img: '../../../assets/images/about/about05.jpg', },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
