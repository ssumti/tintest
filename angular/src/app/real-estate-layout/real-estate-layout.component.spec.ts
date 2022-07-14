import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateLayoutComponent } from './real-estate-layout.component';

describe('RealEstateLayoutComponent', () => {
  let component: RealEstateLayoutComponent;
  let fixture: ComponentFixture<RealEstateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
