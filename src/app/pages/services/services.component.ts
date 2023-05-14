import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  array1 = [
    { id: 0, img: "../../../assets/images/services/services01.jpg", title: "Поліграфія", text: "Поліграфічна продукція із застосуванням офсетного та цифрового друку - важлива галузь промисловості.", routerLink: "/general" },
    { id: 1, img: "../../../assets/images/services/services02.jpg", title: "Широкоформатний друк", text: "Виконуємо комплекс робіт з широкоформатного друку - від розробки дизайну до друку на великому форматі.", routerLink: "/width" },
    { id: 2, img: "../../../assets/images/services/services03.png", title: "Сувеніри", text: "Надаємо комплекс послуг із спеціалізованого будівництва.", routerLink: "/special" },
  ]


  array2 = [
    { id: 3, img: "../../../assets/images/services/services04.jpg", title: "Шовкографія", routerLink: "/silkscreen" },
    { id: 4, img: "../../../assets/images/services/services05.jpg", title: "Пакування", routerLink: "/package" },
    { id: 5, img: "../../../assets/images/services/services06.jpg", title: "Зовнішня реклама", routerLink: "/advertising" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
