import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAlunoComponent } from './material-aluno.component';

describe('MaterialAlunoComponent', () => {
  let component: MaterialAlunoComponent;
  let fixture: ComponentFixture<MaterialAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
