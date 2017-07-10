import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioProfessorComponent } from './diario-professor.component';

describe('DiarioProfessorComponent', () => {
  let component: DiarioProfessorComponent;
  let fixture: ComponentFixture<DiarioProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
