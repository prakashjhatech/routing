import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSegmentComponent } from './element-segment.component';

describe('ElementSegmentComponent', () => {
  let component: ElementSegmentComponent;
  let fixture: ComponentFixture<ElementSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
