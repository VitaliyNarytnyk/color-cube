import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';
import { Location } from '@angular/common'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() items!: { id: number; title: string; img: string; }[];
  @Input() initialSlide!: number;

  config: SwiperOptions = {};

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.config = {
      navigation: true,
      loop: true,
      effect: 'cube',
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      initialSlide: +this.initialSlide - 1,
    }
  }

  goBack() {
    this.location.back()
  }
}
