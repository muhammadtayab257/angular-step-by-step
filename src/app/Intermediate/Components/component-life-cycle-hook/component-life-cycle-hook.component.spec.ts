import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifeCycleHookComponent } from './component-life-cycle-hook.component';

describe('ComponentLifeCycleHookComponent', () => {
  let component: ComponentLifeCycleHookComponent;
  let fixture: ComponentFixture<ComponentLifeCycleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLifeCycleHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifeCycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
