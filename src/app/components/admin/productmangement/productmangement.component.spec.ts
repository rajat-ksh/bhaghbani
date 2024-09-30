import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmangementComponent } from './productmangement.component';

describe('ProductmangementComponent', () => {
  let component: ProductmangementComponent;
  let fixture: ComponentFixture<ProductmangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductmangementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
