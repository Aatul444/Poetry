import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbKhazanaComponent } from './fb-khazana.component';

describe('FbKhazanaComponent', () => {
  let component: FbKhazanaComponent;
  let fixture: ComponentFixture<FbKhazanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbKhazanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbKhazanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
