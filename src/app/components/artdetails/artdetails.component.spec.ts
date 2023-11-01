import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtdetailsComponent } from './artdetails.component';

describe('ArtdetailsComponent', () => {
  let component: ArtdetailsComponent;
  let fixture: ComponentFixture<ArtdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtdetailsComponent]
    });
    fixture = TestBed.createComponent(ArtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
