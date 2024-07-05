import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlattformsComponent } from './plattforms.component';

describe('PlattformsComponent', () => {
  let component: PlattformsComponent;
  let fixture: ComponentFixture<PlattformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlattformsComponent]
    });
    fixture = TestBed.createComponent(PlattformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
