import { TableService } from './../table.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  userId: number;
  details: any[];

  constructor(private tableService: TableService, private route: ActivatedRoute) {
    this.userId = +route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.tableService.changeUserId(this.userId);
    this.getDataById(this.userId);
  }

  getDataById(id) {
    this.tableService.getTableData().subscribe((res: any) => {
      const tableArr: any[] = res;
      this.details = tableArr.filter(ele => ele.id === id);
    });
  }

}
