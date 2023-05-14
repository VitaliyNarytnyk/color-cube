import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertising-main',
  templateUrl: './advertising-main.component.html',
  styleUrls: ['./advertising-main.component.scss']
})
export class AdvertisingMainComponent implements OnInit {

  array1 = [
    { id: 1, img: "../../../../../assets/images/advertising/advertising01.jpg" },
    { id: 2, img: "../../../../../assets/images/advertising/advertising02.jpg" },
    { id: 3, img: "../../../../../assets/images/advertising/advertising03.jpg" }
  ]
  array2 = [
    { id: 4, img: "../../../../../assets/images/advertising/advertising04.jpg" },
    { id: 5, img: "../../../../../assets/images/advertising/advertising05.jpg" },
    { id: 6, img: "../../../../../assets/images/advertising/advertising06.jpg" }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToItem(id: number) {
    this.router.navigate([`advertising/${id}`])
  }
}
