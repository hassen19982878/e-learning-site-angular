import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuduentListComponent } from './studuent-list.component';

describe('StuduentListComponent', () => {
  let component: StuduentListComponent;
  let fixture: ComponentFixture<StuduentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuduentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuduentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
