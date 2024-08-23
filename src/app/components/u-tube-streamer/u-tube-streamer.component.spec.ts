import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTubeStreamerComponent } from './u-tube-streamer.component';

describe('UTubeStreamerComponent', () => {
  let component: UTubeStreamerComponent;
  let fixture: ComponentFixture<UTubeStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UTubeStreamerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UTubeStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
