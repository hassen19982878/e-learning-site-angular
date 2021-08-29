import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuduentUpdateComponent } from './studuent-update.component';

describe('StuduentUpdateComponent', () => {
  let component: StuduentUpdateComponent;
  let fixture: ComponentFixture<StuduentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuduentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuduentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
