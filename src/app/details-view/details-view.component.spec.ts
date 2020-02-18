import { HttpClientModule } from '@angular/common/http';
import { convertToParamMap} from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewComponent } from './details-view.component';
import { ActivatedRoute } from '@angular/router';

describe('DetailsViewComponent', () => {
  let component: DetailsViewComponent;
  let fixture: ComponentFixture<DetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsViewComponent ],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({id: 1}) } } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewComponent);
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

  it('should call getDataById()', () => {
    spyOn(component, 'getDataById');
    component.userId = 1;
    component.ngOnInit();
    expect(component.getDataById).toHaveBeenCalledWith(1);
  });
});
