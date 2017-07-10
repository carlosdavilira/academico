import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProfessorComponent } from './material-professor.component';

describe('MaterialProfessorComponent', () => {
  let component: MaterialProfessorComponent;
  let fixture: ComponentFixture<MaterialProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
