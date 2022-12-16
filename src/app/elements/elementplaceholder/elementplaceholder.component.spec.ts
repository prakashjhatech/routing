import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementplaceholderComponent } from './elementplaceholder.component';

describe('ElementplaceholderComponent', () => {
  let component: ElementplaceholderComponent;
  let fixture: ComponentFixture<ElementplaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementplaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
