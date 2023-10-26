import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalLength: number | undefined;
  @Input() itemsPerPage: number | undefined;
  @Output() pageSelected: EventEmitter<number> = new EventEmitter();
  currentPage = 1;  


  handlePagClick(selectedPage: number) {
    this.currentPage = selectedPage;
    this.pageSelected.emit(this.currentPage);
  }

  createPagSet(): Set<number> {
    const set: Set<number> = new Set();
    const maxPages = this.itemsPerPage && this.totalLength ? Math.ceil(this.totalLength / this.itemsPerPage) : 1;
    for (let num = 1; num <= maxPages; num ++) {
      set.add(num);
    }
    return set;
  }
}
