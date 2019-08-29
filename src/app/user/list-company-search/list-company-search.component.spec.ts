import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanySearchComponent } from './list-company-search.component';

describe('ListCompanySearchComponent', () => {
  let component: ListCompanySearchComponent;
  let fixture: ComponentFixture<ListCompanySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompanySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
