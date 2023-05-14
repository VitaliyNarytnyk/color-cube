import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silkscreen-main',
  templateUrl: './silkscreen-main.component.html',
  styleUrls: ['./silkscreen-main.component.scss']
})
export class SilkscreenMainComponent implements OnInit {

  array1 = [
    { id: 1, img: "../../../../../assets/images/silkscreen/silkscreen01.jpg" },
    { id: 2, img: "../../../../../assets/images/silkscreen/silkscreen02.jpg" },
    { id: 3, img: "../../../../../assets/images/silkscreen/silkscreen03.jpg" }
  ]
  array2 = [
    { id: 4, img: "../../../../../assets/images/silkscreen/silkscreen04.jpg" },
    { id: 5, img: "../../../../../assets/images/silkscreen/silkscreen05.jpg" },
    { id: 6, img: "../../../../../assets/images/silkscreen/silkscreen06.jpg" }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToItem(id: number) {
    this.router.navigate([`silkscreen/${id}`])
  }

}
