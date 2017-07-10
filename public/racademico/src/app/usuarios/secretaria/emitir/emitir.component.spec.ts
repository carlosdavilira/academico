import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirComponent } from './emitir.component';

describe('EmitirComponent', () => {
  let component: EmitirComponent;
  let fixture: ComponentFixture<EmitirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
