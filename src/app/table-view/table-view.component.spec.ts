import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewComponent } from './table-view.component';
import { By } from '@angular/platform-browser';


describe('TableViewComponent', () => {
  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit()', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call getTableData() & setPage()', () => {
    spyOn(component, 'getTableData');
    component.ngOnInit();
    expect(component.getTableData).toHaveBeenCalled();
  });

  it('should call setPage()', () => {
    component.setPage(1);
    expect(component.setPage).toBeTruthy();
  });

  it('should call search()', () => {
    // const button = fixture.debugElement.query(By.css('input'));
    // button.triggerEventHandler('keyup.enter', null);
    component.search('James');
    expect(component.search).toBeTruthy();
  });

});
