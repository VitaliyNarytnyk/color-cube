import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-main',
  templateUrl: './package-main.component.html',
  styleUrls: ['./package-main.component.scss']
})
export class PackageMainComponent implements OnInit {

  array1 = [
    { id: 1, img: "../../../../../assets/images/package/package01.jpg" },
    { id: 2, img: "../../../../../assets/images/package/package02.jpg" },
    { id: 3, img: "../../../../../assets/images/package/package03.jpg" }
  ]
  array2 = [
    { id: 4, img: "../../../../../assets/images/package/package04.jpg" },
    { id: 5, img: "../../../../../assets/images/package/package05.jpg" },
    { id: 6, img: "../../../../../assets/images/package/package06.jpg" }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToItem(id: number) {
    this.router.navigate([`package/${id}`])
  }
}
