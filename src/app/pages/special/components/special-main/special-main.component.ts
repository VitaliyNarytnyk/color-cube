import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-main',
  templateUrl: './special-main.component.html',
  styleUrls: ['./special-main.component.scss']
})
export class SpecialMainComponent implements OnInit {

  isActive = false

  array1 = [
    { id: 1, img: "../../../../assets/images/special/special01.jpg" },
    { id: 2, img: "../../../../assets/images/special/special02.jpg" },
    { id: 3, img: "../../../../assets/images/special/special03.jpg" }
  ]
  array2 = [
    { id: 4, img: "../../../../assets/images/special/special04.jpg" },
    { id: 5, img: "../../../../assets/images/special/special05.jpg" },
    { id: 6, img: "../../../../assets/images/special/special06.png" }
  ]
  array3 = [
    { id: 7, img: "../../../../assets/images/special/special07.jpg" },
    { id: 8, img: "../../../../assets/images/special/special08.jpg" },
    { id: 9, img: "../../../../assets/images/special/special09.jpg" }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToItem(id: number) {
    this.router.navigate([`special/${id}`])
  }

  onChangeActive(event: boolean): void {
    this.isActive = event
  }
}
