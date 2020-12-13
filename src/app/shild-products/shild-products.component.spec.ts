import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShildProductsComponent } from './shild-products.component';

describe('ShildProductsComponent', () => {
  let component: ShildProductsComponent;
  let fixture: ComponentFixture<ShildProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShildProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShildProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
