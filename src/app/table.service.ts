import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
  sortBy: string;

  private userId = new BehaviorSubject(0);
  currentUserId = this.userId.asObservable();

  changeUserId(userId: number) {
    this.userId.next(userId);
  }

  getTableData() {
    return this.httpClient.get(this.url);
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number;
    let endPage: number;

    if (totalPages <= 9) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 9) {
            startPage = 1;
            endPage = 9;
        } else if (currentPage + 1 >= totalPages) {
            startPage = totalPages - 8;
            endPage = totalPages;
        } else {
            startPage = currentPage - 4;
            endPage = currentPage + 4;
        }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = _.range(startPage, endPage + 1);

    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
  }

}
