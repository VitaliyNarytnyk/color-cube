import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-width-main',
  templateUrl: './width-main.component.html',
  styleUrls: ['./width-main.component.scss']
})
export class WidthMainComponent implements OnInit {

  array1 = [
    { id: 1, img: "../../../../../assets/images/width/width01.jpg" },
    { id: 2, img: "../../../../../assets/images/width/width02.jpg" },
    { id: 3, img: "../../../../../assets/images/width/width03.jpg" }
  ]
  array2 = [
    { id: 4, img: "../../../../../assets/images/width/width04.jpg" },
    { id: 5, img: "../../../../../assets/images/width/width05.jpg" },
    { id: 6, img: "../../../../../assets/images/width/width06.jpg" }
  ]
  array3 = [
    { id: 4, img: "../../../../../assets/images/width/width07.jpg" },
    { id: 5, img: "../../../../../assets/images/width/width08.jpg" },
    { id: 6, img: "../../../../../assets/images/width/width09.jpg" }
  ]
  array4 = [
    { id: 4, img: "../../../../../assets/images/width/width10.jpg" },
    { id: 5, img: "../../../../../assets/images/width/width11.jpg" },
    { id: 6, img: "../../../../../assets/images/width/width12.jpg" }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToItem(id: number) {
    this.router.navigate([`width/${id}`])
  }

}
