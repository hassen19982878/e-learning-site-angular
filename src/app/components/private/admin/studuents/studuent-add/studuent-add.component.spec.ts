import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuduentAddComponent } from './studuent-add.component';

describe('StuduentAddComponent', () => {
  let component: StuduentAddComponent;
  let fixture: ComponentFixture<StuduentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuduentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuduentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
