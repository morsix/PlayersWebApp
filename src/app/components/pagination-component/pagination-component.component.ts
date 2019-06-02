import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pagination } from 'src/app/models/pagination.model';

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']
})
export class PaginationComponentComponent implements OnInit {

  @Output() onPagination = new EventEmitter<number>();

  @Input("paginationDetails") 
  set paginationDetails(value: Pagination) {
    this.pagination = value;
    this.setPageNavigationArray();
  }

  pagination:Pagination;

  pagesArray: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  setPage(pageNumber: number) {
    this.pagination.currentPage = pageNumber;
    this.onPagination.emit(pageNumber);
  }

  private setPageNavigationArray() {
    let startPage: number;
    let endPage: number;

    if (this.pagination.totalPages <= 10) {
      startPage = 1;
      endPage = this.pagination.totalPages;
    } else {
      if (this.pagination.currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (this.pagination.currentPage + 4 >= this.pagination.totalPages) {
        startPage = this.pagination.totalPages - 9;
        endPage = this.pagination.totalPages;
      } else {
        startPage = this.pagination.currentPage - 5;
        endPage = this.pagination.currentPage + 4;
      }
    }
    this.pagesArray = [];
    for (let i = startPage; i <= endPage; i++) {
      this.pagesArray.push(i);
    }
  }

}
