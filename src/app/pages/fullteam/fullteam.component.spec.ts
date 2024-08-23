import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullteamComponent } from './fullteam.component';

describe('FullteamComponent', () => {
  let component: FullteamComponent;
  let fixture: ComponentFixture<FullteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
