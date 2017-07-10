import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrancarComponent } from './trancar.component';

describe('TrancarComponent', () => {
  let component: TrancarComponent;
  let fixture: ComponentFixture<TrancarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrancarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrancarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
