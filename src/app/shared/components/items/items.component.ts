import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MainService } from '@app/core/services';
import { Items } from '@app/core/interfaces';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  key!: string
  id!: string
  items: any;
  constructor(
    private route: ActivatedRoute,
    private itemsService: MainService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as string
    this.route.data.subscribe(data => {
      this.key = data.key
    })
  }
  ngOnInit(): void {
    this.getItems();
  }


  private getItems(): void {
    this.itemsService.getData()
      .subscribe(res => {
        this.items = res.data[this.key as keyof Items].items;
      })
  }

}
