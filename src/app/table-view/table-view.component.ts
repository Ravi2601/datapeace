import { Table } from './../table.model';
import { TableService } from './../table.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor(private tableService: TableService) { }

  tableArr = [];
  tableData = [];
  arr = [];
  pager = new Table();
  pagedItems: any[];
  start = 1;
  end = 1;
  sortBy: string;

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.tableService.getTableData().subscribe((res: any) => {
      this.tableArr = res;
      this.tableData = res;

      this.setPage(1);
    });
  }

  setPage(page: number) {
    if (page < 1) {
        return;
    }

    this.pager = this.tableService.getPager(this.tableArr.length, page);
    this.start = this.pager.totalItems ? 1 + (page - 1) * 5 : 0;
    this.end = page * 5;
    if (this.end > this.pager.totalItems) {
        this.end = this.pager.totalItems;
      }


    this.pagedItems = this.tableArr.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  search(firstName: string) {
    if (firstName) {
      this.tableArr = this.tableData.filter(ele => ele.first_name.toLowerCase().includes(firstName.toLowerCase()));
      this.setPage(1);
    } else { this.getTableData(); }
  }

  sortArr(sortBy) {

    this.tableArr.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
          return -1;
      } else if ( a[sortBy] > b[sortBy]) {
          return 1;
      } else {
          return 0;
      }
    });
    this.setPage(this.pager.currentPage);
  }

  sortByDetails(a, b) {
    if (a.this.sortBy > b.this.sortBy) { return 1; }
    if (b.this.sortBy > a.this.sortBy) { return -1; }
    return 0;
  }

}
