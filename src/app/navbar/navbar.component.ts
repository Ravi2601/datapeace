import { TableService } from './../table.service';
import { DetailsViewComponent } from './../details-view/details-view.component';
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId: number;
  @ViewChild('view', { static: false })
  nav: DetailsViewComponent;

  constructor(private route: ActivatedRoute,
              private tableService: TableService,
              private router: Router
              ) {
    this.userId = +route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.tableService.currentUserId.subscribe(id => this.userId = id);
  }

  backToHome() {
    this.tableService.changeUserId(0);
    this.router.navigate(['/']);
  }

}
