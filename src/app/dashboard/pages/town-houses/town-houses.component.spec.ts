import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownHousesComponent } from './town-houses.component';

describe('TownHousesComponent', () => {
  let component: TownHousesComponent;
  let fixture: ComponentFixture<TownHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TownHousesComponent]
    });
    fixture = TestBed.createComponent(TownHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
