import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuarialModelComponent } from './actuarial-model.component';

describe('ActuarialModelComponent', () => {
  let component: ActuarialModelComponent;
  let fixture: ComponentFixture<ActuarialModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuarialModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuarialModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
