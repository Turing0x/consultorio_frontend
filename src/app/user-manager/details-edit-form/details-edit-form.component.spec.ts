import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditFormComponent } from './details-edit-form.component';

describe('DetailsEditFormComponent', () => {
  let component: DetailsEditFormComponent;
  let fixture: ComponentFixture<DetailsEditFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEditFormComponent]
    });
    fixture = TestBed.createComponent(DetailsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
