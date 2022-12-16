import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLableComponent } from './header-lable.component';

describe('HeaderLableComponent', () => {
  let component: HeaderLableComponent;
  let fixture: ComponentFixture<HeaderLableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
