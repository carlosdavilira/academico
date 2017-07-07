import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoAlunoComponent } from './documento-aluno.component';

describe('DocumentoAlunoComponent', () => {
  let component: DocumentoAlunoComponent;
  let fixture: ComponentFixture<DocumentoAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentoAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
