import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropretyComponent } from './proprety.component';

describe('PropretyComponent', () => {
  let component: PropretyComponent;
  let fixture: ComponentFixture<PropretyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropretyComponent]
    });
    fixture = TestBed.createComponent(PropretyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
