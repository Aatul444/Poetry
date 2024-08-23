import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtubeKhazanaComponent } from './utube-khazana.component';

describe('UtubeKhazanaComponent', () => {
  let component: UtubeKhazanaComponent;
  let fixture: ComponentFixture<UtubeKhazanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtubeKhazanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtubeKhazanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
