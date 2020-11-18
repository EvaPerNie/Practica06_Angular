import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorrisFormComponent } from './norris-form.component';

describe('NorrisFormComponent', () => {
  let component: NorrisFormComponent;
  let fixture: ComponentFixture<NorrisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorrisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorrisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
