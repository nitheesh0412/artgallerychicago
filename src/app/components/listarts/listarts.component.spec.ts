import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartsComponent } from './listarts.component';

describe('ListartsComponent', () => {
  let component: ListartsComponent;
  let fixture: ComponentFixture<ListartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListartsComponent]
    });
    fixture = TestBed.createComponent(ListartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
