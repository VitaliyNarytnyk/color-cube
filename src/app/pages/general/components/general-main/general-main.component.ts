import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-main',
  templateUrl: './general-main.component.html',
  styleUrls: ['./general-main.component.scss']
})
export class GeneralMainComponent implements OnInit {

  isActive = false

  array1 = [
    { id: 1, img: "../../../../../assets/images/general/general01.jpg" },
    { id: 2, img: "../../../../../assets/images/general/general02.jpg" },
    { id: 3, img: "../../../../../assets/images/general/general03.jpg" }
  ]
  array2 = [
    { id: 4, img: "../../../../../assets/images/general/general04.png" },
    { id: 5, img: "../../../../../assets/images/general/general05.jpg" },
    { id: 6, img: "../../..../../assets/images/general/general06.jpg" }
  ]

  array3 = [
    { id: 4, img: "../../../../../assets/images/general/general07.jpg" },
    { id: 5, img: "../../../../../assets/images/general/general08.jpg" },
    { id: 6, img: "../../../../../assets/images/general/general09.jpg" }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToItem(id: number) {
    this.router.navigate([`general/${id}`])
  }

  onChangeActive(event: boolean): void {
    this.isActive = event
  }

}
