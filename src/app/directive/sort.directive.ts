import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../core/constants/util';



@Directive({
    selector: '[appSort]'
})
export class SortDirective {

    @Input() appSort: Array<any> | undefined;
    constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

    @HostListener("click")
    sortData() {
        const sort = new Sort();
        const elem = this.targetElem.nativeElement;
        const firstChild = elem.firstElementChild;
        const order = elem.getAttribute("data-order");
        const type = elem.getAttribute("data-type");

        const property = elem.getAttribute("data-name");
        if (order === "desc") {
            this.appSort?.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "asc");
            firstChild.classList.remove(
                'fa',
                'fa-caret-down'
            );

            firstChild.classList.add('fa', 'fa-caret-up');

        }
        else if (order === 'asc') {
            this.appSort?.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "desc");
            firstChild.classList.remove(
                'fa',
                'fa-caret-up'
            );

            firstChild.classList.add('fa', 'fa-caret-down');
        }
    }
}