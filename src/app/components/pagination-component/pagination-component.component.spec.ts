import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponentComponent } from './pagination-component.component';
import { Pagination } from 'src/app/models/pagination.model';

describe('PaginationComponentComponent', () => {
  let component: PaginationComponentComponent;
  let fixture: ComponentFixture<PaginationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponentComponent);
    component = fixture.componentInstance;
    component.pagination = new Pagination(1,10);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
