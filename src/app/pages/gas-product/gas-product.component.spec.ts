import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasProductComponent } from './gas-product.component';

describe('GasProductComponent', () => {
  let component: GasProductComponent;
  let fixture: ComponentFixture<GasProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
