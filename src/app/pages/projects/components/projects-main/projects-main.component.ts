import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-projects-main',
	templateUrl: './projects-main.component.html',
	styleUrls: ['./projects-main.component.scss']
})
export class ProjectsMainComponent implements OnInit {

	@Output() closeData: EventEmitter<any> = new EventEmitter<any>()

	isActive = false

	array1 = [
		{ id: 1, img: "../../../assets/images/projects/projects01.jpg", title: "Меню для ресторану" },
		{ id: 2, img: "../../../assets/images/projects/projects02.jpg", title: "Візитні карти" },
		{ id: 3, img: "../../../assets/images/projects/projects03.jpg", title: "Корпоративні блокноти" },
	]


	array2 = [
		{ id: 4, img: "../../../assets/images/projects/projects04.jpg", title: "Roll-up стенди" },
		{ id: 5, img: "../../../assets/images/projects/projects05.jpg", title: "Паперові пакети" },
		{ id: 6, img: "../../../assets/images/projects/projects06.jpg", title: "Товарні бірки" },
	]

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	navigateToItem(id: number) {
		this.router.navigate([`projects/${id}`])
	}

	onChangeActive(event: boolean): void {
		this.isActive = event
	}

	goBack(event: any) {
		const navi = this.router.navigate(['/projects'])
		this.closeData.emit(navi)
	}
}
