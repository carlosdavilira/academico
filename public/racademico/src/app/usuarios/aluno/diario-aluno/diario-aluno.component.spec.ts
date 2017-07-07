import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioAlunoComponent } from './diario-aluno.component';

describe('DiarioAlunoComponent', () => {
  let component: DiarioAlunoComponent;
  let fixture: ComponentFixture<DiarioAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiarioAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
